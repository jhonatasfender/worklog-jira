import { BaseDir } from './App';
import {
  FunctionType,
  importClassesFromDirectories,
} from './utils/imports-class';

export default class Injection {
  private static injection: Injection;

  private services: Map<string, FunctionType> = new Map();

  private constructor() {
    this.importServices();
  }

  public static getInjectionInstance(): Injection {
    return this.injection;
  }

  public static bootstrap(): Injection {
    if (!this.injection) {
      this.injection = new Injection();
      return this.injection;
    } else {
      return this.injection;
    }
  }

  public getService(): Map<string, FunctionType> {
    return this.services;
  }

  private importServices(): void {
    importClassesFromDirectories([`${BaseDir}/services/*Service.ts`]).forEach(
      cls => this.services.set(cls.name, cls),
    );
  }
}
