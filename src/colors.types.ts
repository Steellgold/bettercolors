export enum ConsoleEffect {
  Bold = "\x1b[1m",
}

export enum ConsoleForground {
  Gray = "\x1b[30m",
  Red = "\x1b[31m",
  Green = "\x1b[32m",
  Yellow = "\x1b[33m",
  Blue = "\x1b[34m",
  Magenta = "\x1b[35m",
  Cyan = "\x1b[36m",
}

export const getColor = (color: string) => {
  switch (color) {
    case "gray":
      return ConsoleForground.Gray;
    case "red":
      return ConsoleForground.Red;
    case "green":
      return ConsoleForground.Green;
    case "yellow":
      return ConsoleForground.Yellow;
    case "blue":
      return ConsoleForground.Blue;
    case "magenta":
      return ConsoleForground.Magenta;
    case "cyan":
      return ConsoleForground.Cyan;
    default:
      return ConsoleForground.Gray;
  }
};

export type Configuration = {
  date: {
    enabled: boolean;
    surrounded: "[]" | "{}" | "()" | "<>" | "none";
    format: string;
  };
};