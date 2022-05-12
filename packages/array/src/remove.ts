import { curryN } from "@unboxing/function";
import { CurriedFunction2 } from '@unboxing/core'

interface Remove {
  <T>(start: number, count: number, list: ArrayLike<T>): T[];
  <T>(start: number, count: number): (list: ArrayLike<T>) => T[];
  <T>(start: number): CurriedFunction2<number, ArrayLike<T>, T[]>;
}

/**
 * Removes the sub-list of `list` starting at index `start` and containing
 * `count` elements. _Note that this is not destructive_: it returns a copy of
 * the list with the changes.
 */
export const removeArray = curryN(3, <T>(start: number, count: number, list: ArrayLike<T>) => {
  const result = Array.prototype.slice.call(list, 0);

  result.splice(start, count);
  return result;
}) as Remove
