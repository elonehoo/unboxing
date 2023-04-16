import { curryN } from '@unboxing/function'
import { indexOf } from './indexOf'

interface Includes {
  (value: string, array: string): boolean
  <T>(value: T, array: ArrayLike<T>): boolean
  <T>(value: T): (array: ArrayLike<T> | string) => boolean
}

/**
 * Dispatches call to arr.indexOf, returns true if arr is array and value in the array or
 * if arr is string and value is substring of arr
 */
export const includes = curryN(2, <T>(value: T, arr: ArrayLike<T> = []) => indexOf(value, arr) !== -1) as Includes
