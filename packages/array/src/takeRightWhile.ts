import { curryN } from "@unboxing/function";
import { sliceArray } from "./slice";
import { ArrPred } from '@unboxing/core'

interface TakeRightWhile {
  (fn: ArrPred<string>, arr: string): string;
  <T>(fn: ArrPred<T>, arr: ArrayLike<T>): T[];
  <T>(fn: ArrPred<T>): {
      (arr: string): string;
      (arr: ArrayLike<T>): T[];
  };
}

/**
 * Returns a new array|string containing the last `n` elements of a given array|string, passing
 * each value to the supplied predicate function, and terminating when the
 * predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail.
 */
export const takeRightWhile = curryN(2, <T>(fn: ArrPred<T>, arr: ArrayLike<T> = []) => {
  let i = arr.length - 1;

  while (i >= 0 && fn(arr[i], i, arr)) {
      i -= 1;
  }

  return sliceArray(i + 1, arr.length, arr);
}) as TakeRightWhile
