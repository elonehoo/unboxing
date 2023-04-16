import { curryN } from '@unboxing/function'

interface Zip {
  <U, V>(list1: ArrayLike<U>, list2: ArrayLike<V>): Array<[U, V]>
  <U>(list1: ArrayLike<U>): <V>(list2: ArrayLike<V>) => Array<[U, V]>
}

/**
 * Creates a new list out of the two supplied by pairing up equally-positioned
 * items from both lists. The returned list is truncated to the length of the
 * shorter of the two input lists.
 */
export const zip = curryN(2, <U, V>(a: ArrayLike<U> = [], b: ArrayLike<V> = []) => {
  const len = Math.min(a.length, b.length)
  const result: Array<[U, V]> = new Array(len)

  for (let i = 0; i < len; i++)
    result[i] = [a[i], b[i]]

  return result
}) as Zip
