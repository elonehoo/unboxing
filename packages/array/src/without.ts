import { curryN } from "@unboxing/function";
import { difference } from "./difference";

interface Without {
  <T>(list1: ArrayLike<T>, list2: ArrayLike<T>): T[];
  <T>(list1: ArrayLike<T>): (list2: ArrayLike<T>) => T[];
}

/**
 * Returns a new list without values in the first argument.
 */
export const withoutArray = curryN(2, <T>(xs: ArrayLike<T>, list: ArrayLike<T>) => difference(list, xs)) as Without
