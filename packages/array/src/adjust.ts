import { curryN } from "@unboxing/function";
import { concat } from "./concat";
import { Endo1, CurriedFunction2 } from '@unboxing/core'

interface Adjust {
  <T>(fn: Endo1<T>, index: number, list: ArrayLike<T>): T[];
  <T>(fn: Endo1<T>, index: number): (list: ArrayLike<T>) => T[];
  <T>(fn: Endo1<T>): CurriedFunction2<number, ArrayLike<T>, T[]>;
}

/**
 * Applies a function to the value at the given index of an array, returning a
 * new copy of the array with the element at the given index replaced with the
 * result of the function application.
 */
export const adjustArray = curryN(3, <T>(fn: Endo1<T>, idx: number, list: ArrayLike<T> = []) => {
  if (idx >= list.length || idx < -list.length) {
      return list;
  }

  const start = idx < 0 ? list.length : 0;
  const index = start + idx;
  const result = concat(list, []);

  result[index] = fn(list[index]);
  return result;
}) as Adjust
