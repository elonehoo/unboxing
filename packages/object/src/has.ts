import { curryN } from "@unboxing/function";
import { Prop } from '@unboxing/core'

interface Has {
  <K extends Prop>(s: K, obj:any): boolean;
  <K extends Prop>(s: K): (obj:any) => boolean;
}

// Returns whether or not an object has an own property with the specified name
export const has = curryN(
  2,
  <K extends Prop>(prop: K, obj:any) => obj != null && Object.prototype.hasOwnProperty.call(obj, prop)
) as Has
