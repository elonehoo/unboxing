import { curryN } from '@unboxing/function'
import { indexOf } from './indexOf'

interface Difference {
  <T>(list1: ArrayLike<T>, list2: ArrayLike<T>): T[]
  <T>(list1: ArrayLike<T>): (list2: ArrayLike<T>) => T[]
}

/**
 * Returns the array of all elements in the first array not
 * contained in the second array.
 */
export const difference = curryN(2, <T>(a: ArrayLike<T> = [], b: ArrayLike<T> = []) => {
  const result = []

  for (let i = 0; i < a.length; i++) {
    if (indexOf(a[i], b) < 0)
      result.push(a[i])
  }

  return result
}) as Difference
