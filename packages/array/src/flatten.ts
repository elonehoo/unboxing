import { isArrayLike } from "@unboxing/is";

//Returns a new list by pulling every item out of it (and all its sub-arrays) and putting them in a new array, depth-first.
export const flatten = <T>(arr: ArrayLike<any> = []): T[] => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
      const a = arr[i];

      if (isArrayLike(a)) {
          const nested = flatten(a);

          for (let j = 0; j < nested.length; j++) {
              result.push(nested[j]);
          }
      } else {
          result.push(a);
      }
  }

  return result;
}
