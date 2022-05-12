import { curryN } from "@unboxing/function";
import { ArrPred } from '@unboxing/core'

interface Find {
  <T>(fn: ArrPred<T>, list: ArrayLike<T>): T | undefined;
  <T>(fn: ArrPred<T>): (list: ArrayLike<T>) => T | undefined;
}

// Returns the first element of the list which matches the predicate, or `undefined` if no element matches.
export const findArray = curryN(2, <T>(fn: ArrPred<T>, arr: ArrayLike<T> = []) => {
  for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i], i, arr)) {
          return arr[i];
      }
  }
}) as Find
