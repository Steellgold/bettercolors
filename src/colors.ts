import { DEFAULT_CONFIG } from "config";
import { Configuration } from "./colors.types";
import { format } from "./colors.utils";

export class Colors {
  private config: Configuration;

  constructor(config?: Configuration) {
    this.config = { ...DEFAULT_CONFIG, ...config };
  }

  public success(message: string) {
    console.log(format(message, this.config, "green"));
  }

  public error(message: string) {
    console.log(format(message, this.config, "red"));
  }

  public warning(message: string) {
    console.log(format(message, this.config, "yellow"));
  }

  public info(message: string) {
    console.log(format(message, this.config, "blue"));
  }

  public debug(message: string) {
    console.log(format(message, this.config, "magenta"));
  }

  public log(message: string) {
    console.log(format(message, this.config, "cyan"));
  }
}