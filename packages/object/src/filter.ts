import { curryN } from '@unboxing/function'
import type { ObjPred } from '@unboxing/core'
import { objectKeys } from './keys'

interface FilterObj {
  <O extends Record<any, any>>(fn: ObjPred<keyof O, O[keyof O]>, obj: O): Partial<O>
  <K extends string, V>(fn: ObjPred<K, V>): <O extends Record<K, V>>(obj: O) => Partial<O>
}

/**
 * Takes a predicate and a object, and returns a new object
 * containing only members which satisfy the
 * given predicate.
 */
export const filterObject = curryN(2, <O extends Record<any, any>>(fn: ObjPred<keyof O, O[keyof O]>, obj: O = {} as any) => {
  const keys = objectKeys(obj)
  const result: Partial<O> = {}

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]

    if (fn(obj[key], key, obj))
      result[key] = obj[key]
  }

  return result
}) as FilterObj
