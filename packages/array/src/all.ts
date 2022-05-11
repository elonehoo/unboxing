import { curryN } from '@unboxing/function'
import { ArrPred } from '@unboxing/core'

interface All {
  <T>(fn: ArrPred<T>, list: ArrayLike<T>): boolean;
  <T>(fn: ArrPred<T>): (list: ArrayLike<T>) => boolean;
}

// Returns `true` if all the elements of the array match the predicate, `false` otherwise.
export const arrayAll = curryN(2, <T>(fn: ArrPred<T>, arr: ArrayLike<T> = []) => {
  for (let i = 0; i < arr.length; i++) {
      if (!fn(arr[i], i, arr)) {
          return false;
      }
  }

  return true;
}) as All
