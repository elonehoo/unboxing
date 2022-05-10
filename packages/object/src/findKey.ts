import { curryN } from "@unboxing/function"
import { ObjPred } from '@unboxing/core'

interface FindKey {
  <O extends Record<any, any>>(fn: ObjPred<keyof O, O[keyof O]>, obj: O): keyof O | void;
  <K extends string, V>(fn: ObjPred<K, V>): <O extends Record<K, V>>(obj: O) => keyof O | void;
}

// Returns first key in `obj` satisfied to `fn`, or undefined if there is no such keys
export const findKey = curryN(2, <O extends Record<any, any>>(fn: ObjPred<keyof O, O[keyof O]>, obj: O = {} as any) => {
  for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
          if (fn(obj[key], key, obj)) {
              return key;
          }
      }
  }
}) as FindKey
