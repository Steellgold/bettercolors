import { Blue, Configuration, Cyan, Gray, Green, Magenta, Red, Reset, Types, White, Yellow } from "./bcolors.types";
import { replaceMultiple } from "./utils/replace";
import { DayJS } from "./utils/day-js"; // That's is next-gen

export const format = (message: string, config: Configuration, type: Types): string => {
  let surrounded = config.date?.surrounded;
  let format = config.date?.format || "DD/MM/YYYY HH:mm:ss";
  let timezone = config.date?.timezone;

  let left = surrounded?.split("")[0] || "";
  let right = surrounded?.split("")[1] || "";

  let date = "";
  if (config.date) {
    date = DayJS().format(format);
    if (timezone) date = DayJS().tz(timezone).format(format);
  }

  if (config.messagePatterns && config.messagePatterns?.[type]) {
    const pattern = config.messagePatterns[type];
    if (!pattern) return message;

    message = replaceMultiple(pattern, [
      { search: "{date}", replace: date },
      { search: "{dated}", replace: left + date + right },
      { search: "{type}", replace: type.charAt(0).toUpperCase() + type.slice(1) },
      { search: "{typeMaj}", replace: type.toUpperCase() },
      { search: "{typeMin}", replace: type.toLowerCase() },
      { search: "{message}", replace: message }
    ]);

    if (config.customParams) {
      for (const key in config.customParams) {
        if (config.customParams.hasOwnProperty(key)) {
          const value = config.customParams[key];
          message = message.replace(`{${key}}`, value);
        }
      }
    }

    return `${message}${Reset}`;
  }

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