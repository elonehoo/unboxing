import { curryN } from '@unboxing/function'
import type { Prop } from '@unboxing/core'
import { prop } from './prop'

interface PropOr {
  <K extends Prop, V, O extends Record<K, any>>(prop: K, value: V, obj: O): O[K]
  <K extends Prop, V>(prop: K, value: V, obj: any): V
  <K extends Prop, V>(prop: K, value: V): {
      <O extends Record<K, any>>(obj: O): O[K]
      (obj: any): V
  }
  <K extends Prop>(prop: K): {
      <V, O extends Record<K, any>>(value: V, obj: O): O[K]
      <V>(value: V): V
      <V>(value: V): {
          <O extends Record<K, any>>(obj: O): O[K]
          (obj: any): V
      }
  }
}

/**
 * If the given, non-null object has an own property with the specified name,
 * returns the value of that property. Otherwise returns the provided default
 * value.
 */
export const propOr = curryN(3, (propName: any, value: any, obj: any) => {
  const v = prop(propName, obj)

  return v != null ? v : value
}) as PropOr
