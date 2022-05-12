import { curryN } from "@unboxing/function";
import { ArrPred } from '@unboxing/core'

interface Any {
  <T>(fn: ArrPred<T>, list: ArrayLike<T>): boolean;
  <T>(fn: ArrPred<T>): (list: ArrayLike<T>) => boolean;
}

// Returns `true` if at least one of elements of the list match the predicate, `false` otherwise.
export const anyArray = curryN(2, <T>(fn: ArrPred<T>, arr: ArrayLike<T> = []) => {
  for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i], i, arr)) {
          return true;
      }
  }
  return false;
}) as Any
