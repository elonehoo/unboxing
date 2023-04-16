import { curryN } from '@unboxing/function'
import type { ObjPred, ObjPredBy, Prop } from '@unboxing/core'
import { has } from './has'

interface Where {
  <O>(spec: Partial<Record<keyof O, ObjPredBy<O>>>, obj: O): boolean
  (spec: Record<Prop, ObjPred<string, any>>): (obj: any) => boolean
}

/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec. Each of the spec's own properties must be a predicate function.
 * Each predicate is applied to the value of the corresponding property of the
 * test object. `where` returns true if all the predicates return true, false
 * otherwise.
 */
export const where = curryN(2, <O>(spec: Partial<Record<keyof O, ObjPredBy<O>>> = {}, obj: O = {} as any) => {
  for (const prop in spec) {
    if (has(prop, spec) && !spec[prop](obj[prop], prop, obj))
      return false
  }

  return true
}) as Where
