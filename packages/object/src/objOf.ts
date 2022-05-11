import { curryN } from "@unboxing/function";
import { Prop } from '@unboxing/core'

interface ObjOf {
  <K extends Prop, V>(key: K, value: V): Record<K, V>;
  <K extends Prop>(key: K): <V>(value: V) => Record<K, V>;
}

// Creates an object containing a single key:value pair.
export const objOf = curryN(2, <K extends Prop, V>(key: K, value: V) => ({ [key]: value })) as ObjOf;
