import { curryN } from "@unboxing/function"
import { Prop } from '@unboxing/core'

type PickProps<K, O> = Pick<O, Exclude<keyof O, Exclude<keyof O, K>>>;

interface PickFunc {
    <K extends Prop, O>(names: ReadonlyArray<K>, obj: O): PickProps<K, O>;
    <K extends Prop>(names: ReadonlyArray<K>): <O>(obj: O) => PickProps<K, O>;
}

// Returns a partial copy of an object containing only the keys specified. If the key does not exist, the property is ignored.
export const pick = curryN(2, <K extends Prop>(props: ReadonlyArray<K> = [], obj = {} as any) => {
  const result = {} as any;

  for (let i = 0; i < props.length; i++) {
      const prop = props[i];

      if (prop in obj) {
          result[prop] = obj[prop];
      }
  }

  return result;
}) as PickFunc
