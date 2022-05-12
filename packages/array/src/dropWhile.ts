import { curryN } from "@unboxing/function";
import { sliceArray } from "./slice";
import { ArrPred } from '@unboxing/core'

interface DropWhile {
  <T>(fn: ArrPred<T>, list: ArrayLike<T>): T[];
  <T>(fn: ArrPred<T>): (list: ArrayLike<T>) => T[];
}

/**
 * Returns a new list excluding the leading elements of a given list which
 * satisfy the supplied predicate function. It passes each value to the supplied
 * predicate function, skipping elements while the predicate function returns
 * `true`.
 */
export const dropArrayWhile = curryN(2, <T>(fn: ArrPred<T>, arr: ArrayLike<T> = []) => {
  let idx = 0;

  while (idx < arr.length && fn(arr[idx], idx, arr)) {
      idx += 1;
  }

  return sliceArray(idx, arr.length, arr);
}) as DropWhile
