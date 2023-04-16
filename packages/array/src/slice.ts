import { curryN } from '@unboxing/function'
import { isString } from '@unboxing/is'

interface Slice {
  (a: number, b: number, list: string): string
  <T>(a: number, b: number, list: ArrayLike<T>): T[]
  (a: number, b: number): {
    (list: string): string
      <T>(list: ArrayLike<T>): T[]
  }
  (a: number): {
    (b: number, list: string): string
      <T>(b: number, list: ArrayLike<T>): T[]
      (b: number): {
        (list: string): string
          <T>(list: ArrayLike<T>): T[]
      }
  }
}

/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 */
export const sliceArray = curryN(3, <T>(fromIndex: number, toIndex: number, list: ArrayLike<T> | string = []) =>
  isString(list) ? list.slice(fromIndex, toIndex) : Array.prototype.slice.call(list, fromIndex, toIndex),
) as Slice
