import { curryN } from "@unboxing/function";
import { objectKeys } from "./keys";
import { ObjBaseBy, ObjOrArrBaseBy, ObjValues, AnyObjOrArr, AnyArr } from '@unboxing/core'

interface GroupBy {
  <Fn extends ObjOrArrBaseBy<AnyObjOrArr, any>>(fn: Fn):
      <Input extends AnyObjOrArr>(obj: Input) => Input extends AnyArr
          ? Record<ReturnType<Fn>, Input>
          : Record<ReturnType<Fn>, ObjValues<Input>[]>;

  <Input extends AnyObjOrArr, Fn extends ObjOrArrBaseBy<Input, any>>(fn: Fn, obj: Input): Input extends AnyArr
      ? Record<ReturnType<Fn>, Input>
      : Record<ReturnType<Fn>, ObjValues<Input>[]>;
}

/**
 * Creates an object composed of keys generated from the results of running
 * each element of object thru `fn`. The corresponding
 * value of each key is an array of elements responsible for generating the key.
 */
export const groupBy = curryN(2, <O extends Record<any, any>>(fn: ObjBaseBy<O, string>, obj: O = {} as any) => {
  const result:any = {};
  const keys = objectKeys(obj);

  for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const groupValue = fn(obj[key], key, obj);

      if (!result[groupValue]) {
          result[groupValue] = [];
      }

      result[groupValue].push(obj[key]);
  }

  return result;
}) as GroupBy
