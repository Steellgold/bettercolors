
# Colors

Colors is an NPM package that adds color to your logs in the console. 

With Colors, you can easily customize the color of your error, success or information messages, for a more pleasant console experience. 

Whether you are a beginner developer or an experienced professional, Colors will help you make your logs clearer and easier to read. 

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
colors.success("Successfully loaded commands");
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