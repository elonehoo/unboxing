import { curryN } from '@unboxing/function'
import type { ArrOrdFunc, Ord } from '@unboxing/core'

interface MaxBy {
  <T, R extends Ord>(fn: ArrOrdFunc<T, R>, arr: ArrayLike<T>): T
  <T, R extends Ord>(fn: ArrOrdFunc<T, R>): (arr: ArrayLike<T>) => T
}

/**
 * Return max value in array, depending on result of calling `fn`
 */
export const maxBy = curryN(2, <T, R extends Ord>(fn: ArrOrdFunc<T, R>, arr: ArrayLike<T> = []) => {
  let result
  let max: Ord = -Infinity

  for (let i = 0; i < arr.length; i++) {
    const computed = fn(arr[i], i, arr)

    if (computed > max) {
      max = computed
      result = arr[i]
    }
  }

  return result
}) as MaxBy
