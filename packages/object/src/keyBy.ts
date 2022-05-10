import { objectKeys } from "./keys"
import { curryN } from "@unboxing/function"
import { ObjBase, ObjBaseBy, Prop } from '@unboxing/core'

interface KeyBy {
  <O, KT extends string>(fn: ObjBaseBy<O, KT>, obj: O): Record<KT, O[keyof O]>;
  <K extends Prop, V, KT extends string>(fn: ObjBase<K, V, KT>): <O extends Record<K, V>>(
      obj: O
  ) => Record<KT, O[keyof O]>;
}

/**
 * Creates an object composed of keys generated from the results of running
 * each element of object thru `fn`. The corresponding value of
 * each key is the last element responsible for generating the key
 */
export const keyBy = curryN(2, <O extends Record<any, any>>(fn: ObjBaseBy<O, string>, obj: O = {} as any) => {
  const result:any = {};
  const keys = objectKeys(obj);

  for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const groupValue = fn(obj[key], key, obj);

      result[groupValue] = obj[key];
  }

  return result;
}) as KeyBy
