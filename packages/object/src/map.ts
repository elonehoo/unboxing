import { curryN } from "@unboxing/function";
import { ObjBaseBy, ObjBase } from '@unboxing/core'

interface MapObject {
  <O extends Record<any, any>, R>(fn: ObjBaseBy<O, R>, obj: O): Record<keyof O, R>;
  <K extends string, V, R>(fn: ObjBase<K, V, R>): <O extends Record<any, any>>(obj: O) => Record<keyof O, R>;
}

// Applies `fn` to each of the `obj` values, and returns new object.
export const mapObject = curryN(2, <O extends Record<any, any>, R>(fn: ObjBaseBy<O, R>, obj: O = {} as any) => {
  const result: Record<keyof O, R> = {} as any;

  for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
          result[key] = fn(obj[key], key, obj);
      }
  }

  return result;
}) as MapObject
