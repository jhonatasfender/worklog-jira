import art from 'ascii-art';
import colors from 'colors';
import { Server } from 'http';

export default class Port {
  private server: Server;

  constructor(server: Server) {
    this.server = server;

    this.info();
  }

  private async info(): Promise<void> {
    const address = this.server.address();

    if (!!address && typeof address === 'object') {
      await this.printingArt();
      this.printingInfoPort(address.port);
    }
  }

  private async printingArt(): Promise<void> {
    const rendered = await art.font('Worklog', 'Doom');
    console.log(colors.green(rendered.toString()));
  }

  private printingInfoPort(port: number): void {
    process.env.PORT = '10';
    const url = colors.yellow.italic(`http://localhost:${port}`);
    console.log(`Access the address to find ${url}`);
  }
}
