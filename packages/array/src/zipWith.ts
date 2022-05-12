import { curryN } from "@unboxing/function";
import { CurriedFunction2 } from  '@unboxing/core'

type MapFunc<U, V, R> = (a: U, b: V) => R;

interface ZipWith {
    <U, V, R>(fn: MapFunc<U, V, R>, list1: ArrayLike<U>, list2: ArrayLike<V>): R[];
    <U, V, R>(fn: MapFunc<U, V, R>, list1: ArrayLike<U>): (list2: ArrayLike<V>) => R[];
    <U, V, R>(fn: MapFunc<U, V, R>): CurriedFunction2<ArrayLike<U>, ArrayLike<V>, R[]>;
}

/**
 * Creates a new list out of the two supplied by applying the function to each
 * equally-positioned pair in the lists. The returned list is truncated to the
 * length of the shorter of the two input lists.
 */
export const zipWith = curryN(3, <U, V, R>(fn: MapFunc<U, V, R>, a: ArrayLike<U> = [], b: ArrayLike<V> = []) => {
  const len = Math.min(a.length, b.length);
  const result: R[] = new Array(len);

  for (let i = 0; i < len; i++) {
      result[i] = fn(a[i], b[i]);
  }

  return result;
}) as ZipWith
