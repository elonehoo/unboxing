import { curryN } from '@unboxing/function'
import type { ArrPred } from '@unboxing/core'

interface Partition {
  <T>(fn: ArrPred<T>, list: ArrayLike<T>): [T[], T[]]
  <T>(fn: ArrPred<T>): (list: ArrayLike<T>) => [T[], T[]]
}

/**
 * Takes a predicate and a array and returns the
 * pair of arrays of the same type of elements which do and do not
 * satisfy, the predicate, respectively.
 */
export const partition = curryN(2, <T>(fn: ArrPred<T>, arr: ArrayLike<T> = []) => {
  const t = []
  const f = []

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr))
      t.push(arr[i])
    else
      f.push(arr[i])
  }

  return [t, f]
}) as Partition
