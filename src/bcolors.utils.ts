import { Blue, Configuration, Cyan, Gray, Green, Magenta, Red, Reset, Types, White, Yellow, rainbowColors } from "./bcolors.types";
import { replaceMultiple } from "./utils/replace";
import { DayJS } from "./utils/day-js"; // That's is next-gen

export const format = (message: string, config: Configuration, type: Types, withMessage: boolean = true): string => {
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

  if (withMessage && config.messagePatterns && config.messagePatterns?.[type]) {
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
  
  if (withMessage) return (date == "" ? "" : (Gray + left + date + right + " ")) + `${getColorByType(type, message)}${Reset}`;
  else return date == "" ? "" : (Gray + left + date + right + " ") + Reset;
};

export const getColorByType = (type: Types, str: string): string => {
  if (type === "success") return Green + str;
  if (type === "error") return Red + str;
  if (type === "info") return Blue + str;
  if (type === "debug") return Magenta + str;
  if (type === "log") return Cyan + str;
  if (type === "warn") return Yellow + str;
  return White;
};

export const rainbow = (message: string, colors: string[] = rainbowColors): string => {
  let rainbow = "";
  for (let i = 0; i < message.length; i++) {
    rainbow += `${Reset}${colors[i % colors.length]}${message[i]}`;
  }
  return rainbow;
}