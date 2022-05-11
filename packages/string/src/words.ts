const camelCaseRegex = /([a-z])([A-Z])/g;
const nonCharRegex = /[^a-zA-Z]+/g;

// Splits string into an array of its words.
export function words(str: string): string[] {
  return str.replace(camelCaseRegex, (_, char1: string, char2: string) => `${char1} ${char2}`).split(nonCharRegex);
}
