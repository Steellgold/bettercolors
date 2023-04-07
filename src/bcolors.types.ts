export enum ConsoleEffect {
  Bold = "\x1b[1m",
}

export const getColor = (color: string): string => {
  switch (color) {
    case "gray":
      return "\x1b[30m";
    case "red":
      return "\x1b[31m";
    case "green":
      return "\x1b[32m";
    case "yellow":
      return "\x1b[33m";
    case "blue":
      return "\x1b[34m";
    case "magenta":
      return "\x1b[35m";
    case "cyan":
      return "\x1b[36m";
    default:
      return "\x1b[37m";
  }
};

export type Configuration = {
  date: {
    enabled: boolean;
    surrounded: "[]" | "{}" | "()" | "<>" | "none";
    format: string;
  };
};