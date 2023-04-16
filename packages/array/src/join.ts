import { curryN } from '@unboxing/function'
import { isArray } from '@unboxing/is'

interface Join {
  (x: string, xs: ArrayLike<any>): string
  (x: string): (xs: ArrayLike<any>) => string
}

/**
 * Returns a string made by inserting the `separator` between each element and
 * concatenating all the elements into a single string.
 */
export const joinArray = curryN(2, <T>(separator = '', arr: ArrayLike<T> = []) => {
  let resultArr: T[]

  if (isArray(arr))
    resultArr = arr
  else
    resultArr = Array.prototype.slice.call(arr)

  return resultArr.join(separator)
}) as Join
