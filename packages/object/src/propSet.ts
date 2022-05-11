import { curryN } from '@unboxing/function'
import type { Prop, ReplaceType } from '@unboxing/core'
import { has } from './has'

interface PropSet {
  <K extends Prop, V, O>(prop: K, val: V, obj: O): ReplaceType<O, K, V>
  <K extends Prop, V>(prop: K, val: V): <O>(obj: O) => ReplaceType<O, K, V>
  <K extends Prop>(prop: K): {
      <V, O>(val: V, obj: O): ReplaceType<O, K, V>
      <V>(val: V): <O>(obj: O) => ReplaceType<O, K, V>
  }
}

export const propSet = curryN(3, <K extends Prop>(prop: K, val: any, obj = {} as any) => {
  if (has(prop, obj) && obj[prop] === val)
    return obj

  return {
    ...obj,
    [prop]: val,
  }
}) as PropSet
