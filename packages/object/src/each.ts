import { curryN } from "@unboxing/function"
import { ObjVoid } from '@unboxing/core'

interface EachObj {
  <O extends Record<any, any>>(fn: ObjVoid<keyof O, O[keyof O]>, obj: O): void;
  <K extends string, V>(fn: ObjVoid<K, V>): (obj: Record<K, V>) => void;
}

// terate over an input `object`, calling a provided function `fn` for each key and value in the object.
export const eachObject = curryN(2, <K extends string, V>(fn: ObjVoid<K, V>, obj: Record<K, V> = {} as any) => {
  for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn(obj[key], key, obj);
      }
  }
}) as EachObj
