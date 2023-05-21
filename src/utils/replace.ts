export const replaceMultiple = (str: string, replacements: { search: string; replace: string }[]): string => {
  return replacements.reduce((acc, { search, replace }) => acc.replace(new RegExp(search, 'g'), replace), str);
}