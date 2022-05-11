// Converts the first character of string to upper case and returns the new string.
export function upperFirst(str: string): string {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}
