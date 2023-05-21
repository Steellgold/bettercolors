export const replaceAll = (message: string, str: string[], replace: string[]) : string => {
  for (let i = 0; i < str.length; i++) {
    message = message.replace(str[i], replace[i]);
  }
  return message;
}