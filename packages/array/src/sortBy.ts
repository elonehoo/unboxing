import { curryN } from "@unboxing/function";
import { Ord, OrdFunc } from '@unboxing/core'

interface SortBy {
  <T, R extends Ord>(fn: OrdFunc<T, R>, list: ArrayLike<T>): T[];
  <T, R extends Ord>(fn: OrdFunc<T, R>): (list: ArrayLike<T>) => T[];
}

/**
 * Sorts the array according to the supplied function.
 */
export const sortArrayBy = curryN(2, <T, R extends Ord>(fn: OrdFunc<T, R>, arr: ArrayLike<T> = []) => {
  const newArray = Array.prototype.slice.call(arr);

  return newArray.sort((a, b) => {
      const x = fn(a);
      const y = fn(b);

      if (x < y) {
          return -1;
      } else if (x > y) {
          return 1;
      }

      return 0;
  });
}) as SortBy
