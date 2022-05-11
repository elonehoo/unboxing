import { curryN } from '@unboxing/function'
import type { CurriedFunction2, Prop } from '@unboxing/core'
import { prop } from './prop'

interface PropEq {
  (prop: Prop, value: any, obj: any): boolean
  (prop: Prop, value: any): (obj: any) => boolean
  (prop: Prop): CurriedFunction2<any, any, boolean>
}

// Returns `true` if the specified object property is equal to the given value; `false` otherwise.
export const propEq = curryN(3, (propName: Prop, value: any, obj: any) => prop(propName, obj) === value) as PropEq
