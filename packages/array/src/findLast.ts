import { curryN } from '@unboxing/function'
import type { ArrPred } from '@unboxing/core'

interface FindLast {
  <T>(fn: ArrPred<T>, list: ArrayLike<T>): T | undefined
  <T>(fn: ArrPred<T>): (list: ArrayLike<T>) => T | undefined
}

// Returns the last element of the list which matches the predicate, or `undefined` if no element matches.
export const findArrayLast = curryN(2, <T>(fn: ArrPred<T>, list: ArrayLike<T>) => {
  for (let i = list.length - 1; i >= 0; i--) {
    if (fn(list[i], i, list))
      return list[i]
  }
}) as FindLast
