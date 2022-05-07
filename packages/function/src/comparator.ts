import { Pred2 } from '@unboxing/core'

interface Comparator {
  <T>(pred: Pred2<T, T>): (x: T, y: T) => -1 | 0 | 1;
}

// Makes a comparator function out of a function that reports whether the first element is less than the second.
export const comparator = (<T>(pred: Pred2<T, T>) => {
  return (a: T, b: T) => {
      if (pred(a, b)) {
          return -1;
      }

      return pred(b, a) ? 1 : 0;
  };
}) as Comparator
