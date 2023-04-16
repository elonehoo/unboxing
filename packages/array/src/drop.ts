import { curryN } from '@unboxing/function'
import { sliceArray } from './slice'

interface Drop {
  (n: number, xs: string): string
  <T>(n: number, xs: ArrayLike<T>): T[]
  (n: number): {
    (xs: string): string
      <T>(xs: ArrayLike<T>): T[]
  }
}

/**
 * Returns all but the first `n` elements of the given list, string.
 */
export const dropArray = curryN(2, <T>(n: number, xs: ArrayLike<T>) => sliceArray(Math.max(0, n), Infinity, xs)) as Drop
