import { curryN } from "@unboxing/function";
import { sliceArray } from "./slice";

interface SplitEvery {
  (a: number, list: string): string[];
  <T>(a: number, list: ArrayLike<T>): T[][];
  (a: number): {
      (list: string): string[];
      <T>(list: ArrayLike<T>): T[][];
  };
}

/**
 * Splits a collection into slices of the specified length
 */
export const splitArrayEvery = curryN(2, <T>(length: number, arr: ArrayLike<T> = []) => {
  const result: T[][] = [];

  for (let i = 0; i < arr.length; i += length) {
      result.push(sliceArray(i, i + length, arr));
  }

  return result;
}) as SplitEvery
