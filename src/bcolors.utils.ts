import { Configuration, getColor } from "./bcolors.types";
import DayJS from "dayjs"; // Bouuh not next-gen

export const format = (message: string, config: Configuration, color: string): string => {
  const date = DayJS().format(config.date.format);
  const dateSurrounded = config.date.surrounded === "none" ? date : `${config.date.surrounded[0]}${date}${config.date.surrounded[1]}`;
  const dateFormatted = config.date.enabled ? dateSurrounded : "";
  return `${getColor("gray")}${dateFormatted} ${getColor(color)}${message}${getColor("gray")}`;
};