import { Configuration, ConsoleForground, getColor } from "./colors.types";
import DayJS from "dayjs"; // Bouuh not next-gen

export const format = (message: string, config: Configuration, color: string) => {
  const date = DayJS().format(config.date.format);
  const dateSurrounded = config.date.surrounded === "none" ? date : `${config.date.surrounded[0]}${date}${config.date.surrounded[1]}`;
  const dateFormatted = config.date.enabled ? dateSurrounded : "";
  return `${ConsoleForground.Gray}${dateFormatted} ${getColor(color)}${message}${ConsoleForground.Gray}`;
};