import { curryN } from "@unboxing/function";
import { sliceArray } from "./slice";

interface Take {
  (n: number, xs: string): string;
  <T>(n: number, xs: ArrayLike<T>): T[];
  (n: number): {
      (xs: string): string;
      <T>(xs: ArrayLike<T>): T[];
  };
}

/**
 * Returns the first `n` elements of the given array or string
 */
export const takeArray = curryN(2, <T>(n: number, arr: ArrayLike<T> = []) => sliceArray(0, n, arr)) as Take
