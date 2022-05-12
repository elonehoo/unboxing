import { sliceArray } from "./slice";

interface Tail {
  (list: string): string;
  <T>(list: ArrayLike<T>): T[];
}

/**
 * Returns all but the first element of the given array.
 */
export const tailArray = (<T>(arr: ArrayLike<T>) => sliceArray(1, arr.length, arr)) as Tail
