import { curryN } from '@unboxing/function'
import type { CompareFunc, Ord } from '@unboxing/core'

interface Sort {
  <T, R extends Ord>(fn: CompareFunc<T, R>, list: ArrayLike<T>): T[]
  <T, R extends Ord>(fn: CompareFunc<T, R>): (list: ArrayLike<T>) => T[]
}

function defaultComparator(a: number, b: number) {
  return a - b
}

/**
 * Returns a copy of the array, sorted according to the comparator function,
 * which should accept two values at a time and return a negative number if the
 * first value is smaller, a positive number if it's larger, and zero if they
 * are equal. Please note that this is a **copy** of the list. It does not
 * modify the original.
 */
export const sortArray = curryN(2, <T, R>(comparator = defaultComparator, arr: ArrayLike<T> = []) => {
  const newArray = Array.prototype.slice.call(arr)

  return newArray.sort(comparator)
}) as Sort
