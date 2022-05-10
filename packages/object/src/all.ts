import { curryN } from '@unboxing/function'
import { ObjPred } from '@unboxing/core'

interface AllObject {
  <K extends string, V>(fn: ObjPred<K, V>, obj: Record<K, V>): boolean;
  <K extends string, V>(fn: ObjPred<K, V>): (obj: Record<K, V>) => boolean;
}

export const allObject:AllObject = curryN(2, <K extends string, V>(fn: ObjPred<K, V>, obj: Record<K, V> = {} as any) => {
  for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key) && !fn(obj[key], key, obj)) {
          return false;
      }
  }
  return true;
})
