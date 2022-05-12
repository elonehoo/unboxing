import { curryN } from "@unboxing/function";
import { CurriedFunction2 } from '@unboxing/core'

export type ReduceFun<T, R> = (acc: R, elem: T, index: number, arr: ArrayLike<T>) => R;

interface Reduce {
    <T, R>(fn: ReduceFun<T, R>, acc: R, list: ArrayLike<T>): R;
    <T, R>(fn: ReduceFun<T, R>, acc: R): (list: ArrayLike<T>) => R;
    <T, R>(fn: ReduceFun<T, R>): CurriedFunction2<R, ArrayLike<T>, R>;
}

/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 */
export const reduceArray = curryN(3, <T, R>(fn: ReduceFun<T, R>, acc: R, arr: ArrayLike<T> = []) => {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
      acc = fn(acc, arr[i], i, arr);
  }

  return acc;
}) as Reduce
