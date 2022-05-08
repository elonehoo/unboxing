import { curryN } from "./curryN";

interface Optional {
  <T, F>(fn: (x: T) => F, x: T): F | true;
  <T, F>(fn: (x: T) => F): (x: T) => F | true;
}

export const optional = curryN(2, <T>(fn: (x: T) => any, x: T) => typeof x === 'undefined' || fn(x)) as Optional
