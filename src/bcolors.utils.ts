import { Blue, Configuration, Cyan, Gray, Green, Magenta, Red, Reset, Types, White, Yellow } from "./bcolors.types";
import DayJS from "dayjs"; // Bouuh not next-gen

export const format = (message: string, config: Configuration, type: Types): string => {
  const date = DayJS().format(config.date.format);
  const dateSurrounded = config.date.surrounded === "none" ? date : `${config.date.surrounded[0]}${date}${config.date.surrounded[1]}`;
  const dateFormatted = config.date.enabled ? dateSurrounded : "";
  return `${Gray}${dateFormatted} ${getColorByType(type)}${message}${getColorByType(type)}${Reset}`;
};

export const getColorByType = (type: Types): string => {
  if (type === "success") return Green;
  if (type === "error") return Red;
  if (type === "info") return Blue;
  if (type === "debug") return Magenta;
  if (type === "log") return Cyan;
  if (type === "warn") return Yellow;
  return White;
};