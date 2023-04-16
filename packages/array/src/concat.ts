import { curryN } from '@unboxing/function'
import { isArray, isArrayLike } from '@unboxing/is'
import { sliceArray } from './slice'

interface Concat {
  (list1: string, list2: string): string
  <U, V>(list1: ArrayLike<U>, list2: ArrayLike<V>): (U | V)[]
  (list1: string): (list2: string) => string
  <U>(list1: ArrayLike<U>): <V>(list2: ArrayLike<V>) => (U | V)[]
}

/**
 * Returns the result of concatenating the given arrays or strings.
 */
export const concat = curryN(2, <U, V>(a: ArrayLike<U> = [], b: ArrayLike<V> = []) => {
  if (isArray(a))
    return a.concat(b)

  if (isArrayLike(a)) {
    const resultArr: (U | V)[] = sliceArray(0, a.length, a)

    for (let i = 0; i < b.length; i++)
      resultArr.push(b[i])

    return resultArr
  }

  return (a as string) + b
}) as Concat
