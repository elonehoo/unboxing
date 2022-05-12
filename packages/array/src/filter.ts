import { curryN } from "@unboxing/function";
import { ArrPred } from '@unboxing/core'

interface Filter {
  <T>(fn: ArrPred<T>, arr: ArrayLike<T>): T[];
  <T>(fn: ArrPred<T>): (arr: ArrayLike<T>) => T[];
}

/**
 * Takes a predicate and a "arr", and returns a new array of the
 * same type containing the members of the given arr which satisfy the
 * given predicate.
 */
export const filterString = curryN(2, <T>(fn: ArrPred<T>, arr: ArrayLike<T> = []) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i], i, arr)) {
          result.push(arr[i]);
      }
  }

  return result;
}) as Filter
