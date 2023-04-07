import { ConsoleForground } from "$core/bcolors.types";

export class MyBot {

  public start(): void {
    console.log(`${ConsoleForground.Green}Hello world!`);
  }

  public stop(): void {
    console.log(`${ConsoleForground.Red}Goodbye world!`);
  }

}

const bot = new MyBot();

bot.start();
bot.stop();