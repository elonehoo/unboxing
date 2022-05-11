import { curryN } from '@unboxing/function'
import type { ObjPred, ObjPredBy } from '@unboxing/core'

interface PickBy {
  <O>(pred: ObjPredBy<O>, obj: O): Partial<O>
  <K extends string>(pred: ObjPred<K, any>): <O>(obj: O) => Partial<O>
}

// Returns a partial copy of an object containing only the keys with `fn` predicate returns true
export const pickBy = curryN(2, <O>(fn: ObjPredBy<O>, obj: O = {} as any) => {
  const result: Partial<O> = {}

  for (const prop in obj) {
    if (fn(obj[prop], prop, obj))
      result[prop] = obj[prop]
  }

  return result
}) as PickBy
