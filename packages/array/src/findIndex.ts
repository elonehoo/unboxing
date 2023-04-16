import { curryN } from '@unboxing/function'
import type { ArrPred } from '@unboxing/core'

interface FindIndex {
  <T>(fn: ArrPred<T>, list: ArrayLike<T>): number
  <T>(fn: ArrPred<T>): (list: ArrayLike<T>) => number
}

// Returns the index of the first element of the list which matches the predicate, or `-1` if no element matches.
export const findArrayIndex = curryN(2, <T>(fn: ArrPred<T>, arr: ArrayLike<T> = []) => {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr))
      return i
  }

  return -1
}) as FindIndex
