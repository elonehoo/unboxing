import { curryN } from "@unboxing/function";

interface StartsWith {
  (a: string, str: string): boolean;
  (a: string): (str: string) => boolean;
}

// Checks if a string starts with the provided prefix
export const startsWith = curryN(
  2,
  (prefix: string = '', str: string = '') => str.slice(0, prefix.length) === prefix
) as StartsWith
