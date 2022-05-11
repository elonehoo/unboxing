import { curryN } from '@unboxing/function'
import type { Prop } from '@unboxing/core'

interface PropFunc {
  <K extends Prop, O extends Record<K, any>>(prop: K, obj: O): O[K]
  <K extends Prop>(prop: K, obj: any): undefined
  <K extends Prop>(prop: K): {
      <O extends Record<K, any>>(obj: O): O[K]
      (obj: any): undefined
  }
}

// Returns a function that when supplied an object returns the indicated property of that object, if it exists.
export const prop = curryN(2, <K extends Prop>(prop: K, obj: any) => (obj != null ? obj[prop] : undefined)) as PropFunc
