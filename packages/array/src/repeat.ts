import { curryN } from "@unboxing/function";

interface Repeat {
  <T>(n: number, a: T): T[];
  (n: number): <T>(a: T) => T[];
}

/**
 * Returns a fixed list of size `n` containing a specified identical value.
 */
export const repeat = curryN(2, <T>(n: number = 0, value: T) => {
  const result: T[] = new Array(n);

  for (let i = 0; i < n; i++) {
      result[i] = value;
  }

  return result;
}) as Repeat
