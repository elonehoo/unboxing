import { curryN } from "./curryN"
import { Pred1 } from "@unboxing/core"

interface When {
  <T, U>(pred: Pred1<T>, whenTrueFn: (a: T) => U, x: T): U | T;
  <T, U>(pred: Pred1<T>, whenTrueFn: (a: T) => U): (x: T) => U | T;
  <T>(pred: Pred1<T>): {
      <U>(whenTrueFn: (a: T) => U, x: T): U | T;
      <U>(whenTrueFn: (a: T) => U): (x: T) => U | T;
  };
}

export const when = curryN(3, (pred, onTrue, x) => {
  if (pred(x)) {
      return onTrue(x);
  }

  return x;
}) as When
