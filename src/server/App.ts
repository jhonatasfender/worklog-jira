import connectLiveReload from 'connect-livereload';
import express, { Application } from 'express';
import livereload from 'livereload';
import { createExpressServer } from 'routing-controllers';
import { Connection, ConnectionOptions, createConnection } from 'typeorm';

import Port from './core/Port';
import Injection from './Injection';
import { importClassesFromDirectories } from './utils/imports-class';

export const BaseDir: string = __dirname;

export class App {
  public express?: Application;

  private static serverInstance: App;

  private port = 3000;

  public static getServerInstance(): App {
    return this.serverInstance;
  }

  public static bootstrap(): App {
    if (!this.serverInstance) {
      this.serverInstance = new App();
      return this.serverInstance;
    } else {
      return this.serverInstance;
    }
  }

  private constructor() {
    Injection.bootstrap();

    this.runServer();
    this.database();
  }

  private runServer(): void {
    this.port = this.normalizePort(process.env.PORT || this.port);
    this.createServer();
  }

  private createServer(): void {
    this.express = createExpressServer({
      defaults: {
        nullResultCode: 404,
        undefinedResultCode: 204,
      },
      classTransformer: true,
      controllers: [`${BaseDir}/controllers/*Controller.ts`],
      middlewares: [`${BaseDir}/middlewares/*Middlewar.ts`],
      interceptors: [
        `${BaseDir}/modules/**/interceptors/**/*Interceptor.ts`,
        `${BaseDir}/interceptors/**/*Interceptor.ts`,
      ],
    });

    if (!this.express) return;

    this.express.use(express.json());

    const liveReloadServer = livereload.createServer();
    liveReloadServer.server.once('connection', () => {
      setTimeout(() => liveReloadServer.refresh('/'), 100);
    });

    this.express.use(connectLiveReload());

    new Port(this.express.listen());
  }

  private async database(): Promise<Connection> {
    const options: ConnectionOptions = {
      type: 'sqlite',
      database: `${BaseDir}/database/line.sqlite`,
      entities: importClassesFromDirectories([`${BaseDir}/entities/*.ts`]),
      logging: true,
    };

    const connection = await createConnection(options);

    return connection;
  }

  private normalizePort(val: number | string): number {
    const port: number = typeof val === 'string' ? parseInt(val, 10) : val;
    return port;
  }
}

export const server = App;
