import { curryN } from '@unboxing/function'
import type { Ord, OrdFunc } from '@unboxing/core'

interface StableSortBy {
  <T, R extends Ord>(fn: OrdFunc<T, R>, list: ArrayLike<T>): T[]
  <T, R extends Ord>(fn: OrdFunc<T, R>): (list: ArrayLike<T>) => T[]
}

/**
 * Sorts the array according to the supplied function and keeping the order of elements.
 */
export const stableSortBy = curryN(2, <T, R extends Ord>(fn: OrdFunc<T, R>, arr: ArrayLike<T> = []) => {
  const len = arr.length
  const indexes = new Array(len)

  for (let i = 0; i < len; i++)
    indexes[i] = i

  indexes.sort((a, b) => {
    const valueA = arr[a]
    const valueB = arr[b]
    const x = fn(valueA)
    const y = fn(valueB)

    if (x < y)
      return -1
    else if (x > y)
      return 1

    return a - b
  })

  const result = new Array(len)

  for (let i = 0; i < len; i++)
    result[i] = arr[indexes[i]]

  return result
}) as StableSortBy
