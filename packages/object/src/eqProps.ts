import { curryN } from "@unboxing/function"
import { CurriedFunction2, Prop } from '@unboxing/core'

interface EqProps {
  <K extends Prop>(prop: K, obj1: Record<any, any>, obj2: Record<any, any>): boolean;
  <K extends Prop>(prop: K, obj1: Record<any, any>): (obj2: Record<any, any>) => boolean;
  <K extends Prop>(prop: K): CurriedFunction2<Record<any, any>, Record<any, any>, boolean>;
}

// Reports whether two objects have the same value, in equal terms, for the specified property. Useful as a curried predicate.
export const eqProps = curryN(3, <K extends Prop>(prop: K, obj1: Record<any, any>, obj2: Record<any, any>) => {
  return obj1 != null && obj2 != null ? obj1[prop] === obj2[prop] : undefined;
}) as EqProps
