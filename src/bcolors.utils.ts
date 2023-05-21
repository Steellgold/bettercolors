import { Blue, Configuration, Cyan, Gray, Green, Magenta, Red, Reset, Types, White, Yellow } from "./bcolors.types";
import { DayJS } from "./utils/day-js"; // That's is next-gen

export const format = (message: string, config: Configuration, type: Types): string => {
  let surrounded = config.date?.surrounded;
  let format = config.date?.format || "DD/MM/YYYY HH:mm:ss";
  let timezone = config.date?.timezone;

  let left = surrounded?.split("")[0] || "";
  let right = surrounded?.split("")[1] || "";

  let date = DayJS().format(format);
  if (timezone) date = DayJS().tz(timezone).format(format);

  return `${Gray}${left}${date}${right} ${getColorByType(type)}${message}${Reset}`;
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