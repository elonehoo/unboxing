import { isArray,isArrayLike } from "@unboxing/is";

interface ToArray {
  <T>(v: ArrayLike<T>): T[];
  <T>(v: T): T extends Array<any> ? T : T[];
}

/**
 * Converts val to array. If val is array return it.
 */
export const toArray = ((val) => {
  if (isArray(val)) {
      return val;
  }

  if (isArrayLike(val)) {
      return Array.prototype.slice.call(val);
  }

  return [val];
}) as ToArray
