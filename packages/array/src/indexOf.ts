import { curryN } from "@unboxing/function";
import { isString } from "@unboxing/is";

interface IndexOf {
  (target: string, list: string): number;
  <T>(target: T, list: ArrayLike<T>): number;
  (targer: string): (list: string) => number;
  <T>(target: T): (list: ArrayLike<T>) => number;
}

/**
 * Returns the position of the first occurrence of an item in an array, or -1
 * if the item is not included in the array.
 */
export const indexOf = curryN(2, <T>(target: T | string, xs: ArrayLike<T> | string = []) => {
  if (isString(xs)) {
      return xs.indexOf(target as string);
  }

  return Array.prototype.indexOf.call(xs, target);
}) as IndexOf
