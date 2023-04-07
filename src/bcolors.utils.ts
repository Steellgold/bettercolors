import { Configuration, ConsoleForground, Types } from "./bcolors.types";
import DayJS from "dayjs"; // Bouuh not next-gen

export const format = (message: string, config: Configuration, type: Types): string => {
  const date = DayJS().format(config.date.format);
  const dateSurrounded = config.date.surrounded === "none" ? date : `${config.date.surrounded[0]}${date}${config.date.surrounded[1]}`;
  const dateFormatted = config.date.enabled ? dateSurrounded : "";
  return `${ConsoleForground.Gray}${dateFormatted} ${getColorByType(type)}${message}${getColorByType(type)}`;
};

export const getColorByType = (type: Types): string => {
  if (type === "success") return ConsoleForground.Green;
  if (type === "error") return ConsoleForground.Red;
  if (type === "info") return ConsoleForground.Blue;
  if (type === "debug") return ConsoleForground.Magenta;
  if (type === "log") return ConsoleForground.Cyan;
  if (type === "warn") return ConsoleForground.Yellow;
  return ConsoleForground.White;
};