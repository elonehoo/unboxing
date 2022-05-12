import { curryN } from "@unboxing/function";
import { takeArray } from "./take";

interface DropLast {
  (n: number, xs: string): string;
  <T>(n: number, xs: ArrayLike<T>): T[];
  (n: number): {
      (xs: string): string;
      <T>(xs: ArrayLike<T>): T[];
  };
}

/**
 * Returns a list containing all but the last `n` elements of the given `list`.
 */
export const dropArrayLast = curryN(2, <T>(n: number, xs: ArrayLike<T>) => takeArray(n < xs.length ? xs.length - n : 0, xs)) as DropLast
