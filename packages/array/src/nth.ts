import { curryN } from "@unboxing/function";

interface Nth {
  <T>(n: number, list: ArrayLike<T>): T | undefined;
  (n: number): <T>(list: ArrayLike<T>) => T | undefined;
}

/**
 * Returns the nth element of the given array. If n is negative the
 * element at index length + n is returned.
 */
export const nth = curryN(2, <T>(index = 0, arr: ArrayLike<T> = []) => {
  if (index < 0) {
      index += arr.length;
  }

  return arr[index];
}) as Nth
