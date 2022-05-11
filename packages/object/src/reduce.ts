import { curryN } from "@unboxing/function";

export type ReduceFunc<R, O extends Record<any, any>> = (acc: R, value: O[keyof O], key: keyof O & string, obj: O) => R;

interface ReduceObj {
    <R, O extends Record<any, any>>(fn: ReduceFunc<R, O>, acc: R, obj: O): R;
    <R>(fn: ReduceFunc<R, any>, acc: R): (obj:any) => R;
    (fn: ReduceFunc<any, any>): {
        <R>(acc: R, obj:any): R;
        <R>(acc: R): (obj:any) => R;
    };
}

/**
 * Returns a single item by iterating through the obj, successively calling
 * the iterator function and passing it an accumulator value, current
 * value and current key from the obj, and then passing the result to the next call.
 */
export const reduce = curryN(3, <R, O extends Record<any, any>>(fn: ReduceFunc<R, O>, acc: R, obj: O = {} as any) => {
  for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
          acc = fn(acc, obj[key], key, obj);
      }
  }

  return acc;
}) as ReduceObj
