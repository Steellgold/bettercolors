# BetterColors Package 🎨

The **BetterColors** package is a utility for formatting and displaying console messages with different colors and styles. It provides a set of methods to format messages for various types such as success, error, warning, info, debug, log, and rainbow.

## Installation

You can install the **BetterColors** package using npm:

```shell
npm install bettercolors
pnpm i bettercolors
yarn add bettercolors
```

## Usage

To use the **BetterColors** package, you need to import the `BColors` class from the `bcolors` module. Here's an example:

```typescript
import { BColors } from 'bettercolors';
const bcolors = new BColors();

bcolors.success('Success message');
bcolors.error('Error message');
bcolors.warning('Warning message');
bcolors.info('Information message');
bcolors.debug('Debug message');
bcolors.log('Log message');
bcolors.rainbow('Rainbow message');
```

The above code demonstrates the basic usage of the **BetterColors** package. Each method corresponds to a different message type and formats the message accordingly.

## Configuration

You can provide a configuration object to the `BColors` constructor to customize the package behavior. The configuration object can include the following properties:

- `messagePatterns`: An object that allows you to customize the message patterns for different types. You can specify custom patterns for success, error, warn, info, debug, log, rainbow, and default types.

- `customParams`: An object that allows you to define custom parameters for your messages. You can provide any key-value pairs as custom parameters.

- `date`: A configuration object that enables you to display the date in your messages. You can specify the format, timezone, and surrounding characters for the date.

## Available Colors and Styles

The **BetterColors** package provides several predefined colors and styles that you can use to format your messages. Here are some of the available colors:

- Gray
- Red
- Green
- Yellow
- Blue
- Magenta
- Cyan
- White

And here are a few available styles:

- Reset
- Bold
- Thin
- Underscore
- Blink
- Reverse
- Hidden

You can utilize these colors and styles to add visual enhancements to your messages.

## API Reference

### BColors Class

The `BColors` class provides the following methods:

- `success(message: string): void` - Formats and displays a success message.
- `error(message: string): void` - Formats and displays an error message.
- `warning(message: string): void` - Formats and displays a warning message.
- `info(message: string): void` - Formats and displays an information message.
- `debug(message: string): void` - Formats and displays a debug message.
- `log(message: string): void` - Formats and displays a log message.
- `rainbow(message: string, colors?: string[]): void` - Formats and displays a rainbow message.

### Types

The **BetterColors** package defines the following types:

- `Configuration`: A type that represents the configuration object used to customize the package behavior. It includes optional properties for message patterns, custom parameters, and date configuration.

## Examples

Here are a few examples to demonstrate different usage scenarios:

```typescript
import { BColors } from 'bettercolors';
const bcolors = new BColors();

bcolors.success('Operation completed successfully');
bcolors.error('An error occurred');
bcolors.warning('Warning: This action is irreversible');
bcolors.info('Please note the following information');
bcolors.debug('Debugging information');
colors.log('Log entry');
bcolors.rainbow('Enjoy the colorful message');
```

```typescript
import { BColors, Gray, Red, Green } from 'bettercolors';

export const bcolors = new BColors({
  messagePatterns: {
    success: `${Gray}[SUCCESS ${Bold}{user}${Reset}]: ${Green}{message}`,
    error: `${Gray}[ERROR ${Bold}{environment}${Reset}]: ${Red}{message}`
  },
  customParams: {
    user: "John Doe",
    environment: "development"
  },
  date: {
    surrounded: "[]",
    format: "DD/MM/YYYY HH:mm:ss",
    timezone: "America/Denver"
  }
});

bcolors.success("Operation completed successfully");
bcolors.error("An error occurred");
bcolors.warning("Warning: This action is irreversible");
bcolors.info("Please note the following information");
bcolors.debug("Debugging information");
bcolors.log("Log entry");
bcolors.rainbow("Enjoy the colorful message");
```

Result:

![image](https://github.com/Steellgold/Colors/assets/51505384/8d3a5dd0-f976-44f4-930e-8ca86780c5ff)


#### Rainbow Message (with `hexToConsoleColor`)

```typescript
import { BColors, Gray, Red, Yellow, Green, hexToConsoleColor } from 'bettercolors';
const bcolors = new BColors();

bcolors.rainbow('Enjoy the colorful message', [
  hexToConsoleColor('#ff0000'),
  hexToConsoleColor('#ff7f00'),
  hexToConsoleColor('#ffff00'),
  hexToConsoleColor('#00ff00'),
]);

bcolors.rainbow("Enjoy the default colorful message");

bcolors.rainbow("Enjoy the customized colorful message with pre-defined color", [
  Gray,
  Red,
  Yellow,
  Green
]);
```

Result:

![image](https://github.com/Steellgold/Colors/assets/51505384/e834792b-cfae-49ee-ba6c-ce4b34cb6364)

## License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

This README.md file was automatically generated by a script based on the provided source code files.