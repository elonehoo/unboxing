import { curryN } from "@unboxing/function"
import { Prop } from '@unboxing/core'

interface Assoc {
  <K extends Prop, V, O>(prop: K, val: V, obj: O): O & { [k in K]: V };
  <K extends Prop, V>(prop: K, val: V): <O>(obj: O) => O & { [k in K]: V };
  <K extends Prop>(prop: K): {
      <V, O>(val: V, obj: O): O & { [k in K]: V };
      <V>(val: V): <O>(obj: O) => O & { [k in K]: V };
  };
}

/**
 * Makes a shallow clone of an object, setting or overriding the specified
 * property with the given value. All non-primitive properties are
 * copied by reference.
 */
export const assoc = curryN(3, <K extends Prop, V, O>(prop: K, val: V, obj: O = {} as any) => ({
  ...obj,
  [prop]: val,
})) as Assoc
