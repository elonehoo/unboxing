import { curryN } from "@unboxing/function";
import { ArrVoid } from '@unboxing/core'

interface Each {
  <T>(fn: ArrVoid<T>, arr: ArrayLike<T>): void;
  <T>(fn: ArrVoid<T>): (arr: ArrayLike<T>) => void;
}

// Iterate over an input `list`, calling a provided function `fn` for each element in the list.
export const eachArray = curryN(2, <T>(fn: ArrVoid<T>, arr: ArrayLike<T> = []) => {
  for (let i = 0; i < arr.length; i++) {
      fn(arr[i], i, arr);
  }
}) as Each
