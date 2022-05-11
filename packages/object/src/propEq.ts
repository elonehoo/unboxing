import { curryN } from "@unboxing/function"
import { prop } from "./prop"
import { CurriedFunction2, Prop } from '@unboxing/core'

interface PropEq {
  (prop: Prop, value:any, obj:any): boolean;
  (prop: Prop, value:any): (obj:any) => boolean;
  (prop: Prop): CurriedFunction2<any, any, boolean>;
}

// Returns `true` if the specified object property is equal to the given value; `false` otherwise.
export const propEq = curryN(3, (propName: Prop, value:any, obj:any) => prop(propName, obj) === value) as PropEq
