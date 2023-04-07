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
    console.log(format(message, this.config, "green"));
  }

  public error(message: string): void {
    console.log(format(message, this.config, "red"));
  }

  public warning(message: string): void {
    console.log(format(message, this.config, "yellow"));
  }

  public info(message: string): void {
    console.log(format(message, this.config, "blue"));
  }

  public debug(message: string): void {
    console.log(format(message, this.config, "magenta"));
  }

  public log(message: string): void {
    console.log(format(message, this.config, "cyan"));
  }

}