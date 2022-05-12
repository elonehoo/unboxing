import { curryN } from "@unboxing/function";

type MapFunc<T, R> = (item: T, i: number, arr: ArrayLike<T>) => R;

interface Map {
    <T, R>(fn: MapFunc<T, R>, arr: ArrayLike<T>): R[];
    <T, R>(fn: MapFunc<T, R>): (arr: ArrayLike<T>) => R[];
}

/**
 * Creates an array of values by running each element in list through fn. The fn is invoked with three arguments:
 * (value, index, arr).
 */
export const map = curryN(2, <T, R>(fn: MapFunc<T, R>, arr: ArrayLike<T> = []) => {
  const len = arr.length;
  const result = new Array(len);

  for (let i = 0; i < len; i++) {
      result[i] = fn(arr[i], i, arr);
  }

  return result;
}) as Map
