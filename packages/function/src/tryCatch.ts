import { curryN } from "./curryN"
import {Func} from '@unboxing/core'

interface TryCatch {
  <T>(tryer: Func<T>, catcher: Func<T>): Func<T>;
}

// Takes two functions, tryer and catcher.
export const tryCatch = curryN(2, <T>(tryer: Func<T>, catcher: Func<T>) => {
  return (args:any|any[]) => {
      try {
          return tryer.apply(this, args);
      } catch (e) {
          args.unshift(e);
          return catcher.apply(this, args);
      }
  };
}) as TryCatch
