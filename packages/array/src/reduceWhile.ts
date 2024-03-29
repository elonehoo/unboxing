import { curryN } from '@unboxing/function'
import { isNil } from '@unboxing/is'
import type { CurriedFunction2, CurriedFunction3 } from '@unboxing/core'
import type { ReduceFun } from './reduce'

type ReducePred<T, R> = (acc: R, elem: T, index: number, arr: ArrayLike<T>) => boolean

interface ReduceWhile {
    <T, R>(predicate: ReducePred<T, R>, fn: ReduceFun<T, R>, acc: R, list: ArrayLike<T>): R
    <T, R>(predicate: ReducePred<T, R>, fn: ReduceFun<T, R>, acc: R): (list: ArrayLike<T>) => R
    <T, R>(predicate: ReducePred<T, R>, fn: ReduceFun<T, R>): CurriedFunction2<R, ArrayLike<T>, R>
    <T, R>(predicate: ReducePred<T, R>): CurriedFunction3<ReduceFun<T, R>, R, ArrayLike<T>, R>
}

/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 */
export const reduceWhile = curryN(4, <T, R>(pred: ReducePred<T, R>, fn: ReduceFun<T, R>, acc: R, arr: ArrayLike<T> = []) => {
  if (isNil(arr))
    return acc

  const length = arr.length

  for (
    let index = 0, curr = arr[0];
    index < length && pred(acc, curr, index, arr);
    curr = arr[++index]
  )
    acc = fn(acc, curr, index, arr)

  return acc
}) as ReduceWhile
