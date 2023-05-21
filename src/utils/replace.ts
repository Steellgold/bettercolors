export const replaceMultiple = (str: string, replacements: { search: string; replace: string }[]): string => {
  return replacements.reduce((acc, { search, replace }) => acc.replace(new RegExp(search, 'g'), replace), str);
}

export const hexToConsoleColor = (hex: string): string => {
  const hexWithoutHash = hex.replace("#", "");

  const red = parseInt(hexWithoutHash.substr(0, 2), 16);
  const green = parseInt(hexWithoutHash.substr(2, 2), 16);
  const blue = parseInt(hexWithoutHash.substr(4, 2), 16);

  const consoleColor = `\x1b[38;2;${red};${green};${blue}m`;

  return consoleColor;
}