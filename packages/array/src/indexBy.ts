import { curryN } from "@unboxing/function";

type Pred<T> = (v: T, index: number, arr: ArrayLike<T>) => string;

interface IndexBy {
    <T>(fn: Pred<T>, list: ArrayLike<T>): Record<string, T>;
    <T>(fn: Pred<T>): (list: ArrayLike<T>) => Record<string, T>;
}

/**
 * Given a function that generates a key, turns a list of objects into an
 * object indexing the objects by the given key. Note that if multiple
 * objects generate the same value for the indexing key only the last value
 * will be included in the generated object.
 */
export const indexBy = curryN(2, <T>(fn: Pred<T>, arr: ArrayLike<T> = []) => {
  const result:any = {};

  for (let i = 0; i < arr.length; i++) {
      result[fn(arr[i], i, arr)] = arr[i];
  }

  return result;
}) as IndexBy
