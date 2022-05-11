import { curryN } from '@unboxing/function'
import type { ObjBase, Prop } from '@unboxing/core'
import { prop } from './prop'

interface PropApply {
  <K extends Prop, R, O extends Record<K, any>>(prop: K, fn: ObjBase<K, O[K], R>, obj: O): R
  <K extends Prop, V, R>(prop: K, fn: ObjBase<K, V, R>, obj: any): R
  <K extends Prop, V, R>(prop: K, fn: ObjBase<K, V, R>): (obj: any) => R
  <K extends Prop>(prop: K): {
      <V, R>(fn: ObjBase<K, V, R>, obj: any): R
      <V, R>(fn: ObjBase<K, V, R>): (obj: any) => R
  }
}

// Returns the result of `fn` with value of property in `obj`.
export const propApply = curryN(3, (propName: Prop, fn: any, obj: any) => fn(prop(propName, obj), propName, obj)) as PropApply
