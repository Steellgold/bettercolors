
# BetterColors

BetterColors is an NPM package that adds color to your logs in the console. 

With BetterColors, you can easily customize the color of your error, success or information messages, for a more pleasant console experience. 

Whether you are a beginner developer or an experienced professional, BetterColors will help you make your logs clearer and easier to read. 

Try it now and see the difference it can make in your workflow!
## Installation and usage

```bash
npm install bettercolors

Or if you are a person in the next generation 
  
pnpm install bettercolors
```

Import the class

```TS
import { BColors } from "bettercolors";
```

Start coding

```TS
const colors = new BColors();
```

Configure your instance:

```TS
const colors = new BColors({
  date: {
    enabled: true,
    format: "HH:mm:ss",
    surrounded: "[]"
  }
});
```

And log your bigdata

```TS
import { Green, Red } from "bettercolors";

export class MyBot {

  public start(): void {
    console.log(`${Green}Hello world!`);
  }

  public stop(): void {
    console.log(`${Red}Goodbye world!`);
  }

}

const bot = new MyBot();

bot.start();
bot.stop();
```

Result: 
![Image](https://cdn.discordapp.com/attachments/732392873667854372/1093844125322846238/image.png)

Or if you make your own message

```TS
import { BColors } from "bettercolors";
```

#### Result:
![Result](https://media.discordapp.net/attachments/732392873667854372/1093710978757181540/image.png)
## Running Tests

To run tests, run the following command, with Vitest

```bash
npm run test:unit
  
Or if you are a person in the next generation 
  
pnpm run test:unit
```

### Result (desired 😅):
![Result](https://cdn.discordapp.com/attachments/596045035443716150/1093715774989930496/image.png)