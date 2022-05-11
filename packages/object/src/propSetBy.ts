import { curryN } from "@unboxing/function";
import { Prop, ReplaceType, ObjBase } from '@unboxing/core'
import { has } from "./has";
import { propApply } from "./propApply";

interface PropSetBy {
  <K extends Prop, O extends Record<any, any>, R>(prop: K, fn: ObjBase<K, O[K], R>, obj: O): ReplaceType<O, K, R>;
  <K extends Prop, V, R>(prop: K, fn: ObjBase<K, V, R>): <O>(obj: O) => ReplaceType<O, K, R>;
  <K extends Prop>(prop: K): {
      <O extends Record<any, any>, R>(fn: ObjBase<K, O[K], R>, obj: O): ReplaceType<O, K, R>;
      <V, R>(fn: ObjBase<K, V, R>): <O>(obj: O) => ReplaceType<O, K, R>;
  };
}

export const propSetBy = curryN(3, <K extends Prop>(prop: K, fn: ObjBase<K, any, any>, obj = {} as any) => {
  const res = propApply(prop, fn, obj);

  if (has(prop, obj) && obj[prop] === res) {
      return obj;
  }

  return {
      ...obj,
      [prop]: res,
  };
}) as PropSetBy
