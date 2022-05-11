import { curryN } from '@unboxing/function'
import type { CurriedFunction2, Paths, Prop } from '@unboxing/core'
import { path } from './path'

interface PathOr {
  <K extends Prop, V, O extends Record<K, any>>(path: [K], value: V, obj: O): O[K]
  <K extends Prop, V>(path: [K], value: V, obj: any): V
  <K extends Prop, V>(path: [K], value: V): {
      <O extends Record<K, any>>(obj: O): O[K]
      (obj: any): V
  }
  <K extends Prop>(path: [K]): {
      <V, O extends Record<K, any>>(value: V, obj: O): O[K]
      <V>(value: V, obj: any): V
      <V>(value: V): {
          <O extends Record<K, any>>(obj: O): O[K]
          (obj: any): V
      }
  }
  (path: Paths, value: any, obj: any): any
  (path: Paths, value: any): (obj: any) => any
  (path: Paths): CurriedFunction2<any, any, any>
}

//  * If the given, non-null object has a value at the given path, returns the value at that path. Otherwise returns the provided default value.
export const pathOr = curryN(3, (paths: Paths = [], value: any, obj = {}) => {
  const v = path(paths, obj)

  return v != null ? v : value
}) as PathOr
