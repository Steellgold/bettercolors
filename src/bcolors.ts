import { Configuration } from "./bcolors.types";
import { format } from "./bcolors.utils";

export class BColors {

  private config: Configuration;

  constructor(config?: Configuration) {
    this.config = config || {
      date: {
        enabled: true,
        surrounded: "[]",
        format: "DD/MM/YYYY HH:mm:ss"
      }
    };
  }

  public success(message: string): void {
    console.log(format(message, this.config, "success"));
  }

  public error(message: string): void {
    console.log(format(message, this.config, "error"));
  }

  public warning(message: string): void {
    console.log(format(message, this.config, "warn"));
  }

  public info(message: string): void {
    console.log(format(message, this.config, "info"));
  }

  public debug(message: string): void {
    console.log(format(message, this.config, "debug"));
  }

  public log(message: string): void {
    console.log(format(message, this.config, "log"));
  }

}