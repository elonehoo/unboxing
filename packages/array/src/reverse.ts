import { isString } from "@unboxing/is";

interface Reverse {
  (list: string): string;
  <T>(list: ArrayLike<T>): T[];
}

/**
 * Returns a new list or string with the elements or characters in reverse
 * order.
 */
export const reverseArray = (<T>(list: ArrayLike<T> | string) =>
    isString(list)
        ? list
              .split('')
              .reverse()
              .join('')
        : Array.prototype.slice.call(list, 0).reverse()) as Reverse
