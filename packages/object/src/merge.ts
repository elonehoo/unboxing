import { curryN } from "@unboxing/function";

export interface Merge {
  <T1, T2>(a: T1, b: T2): T1 & T2;
  <T1, T2, T3>(a: T1, b: T2, c: T3): T1 & T2 & T3;
  <T1>(a: T1): {
      <T2, T3>(b: T2, c: T3): T1 & T2 & T3;
      <T2>(b: T2): T1 & T2;
  };
  <T>(...args: T[]): T;
}

export const merge = curryN(2, (...sources: Record<any, any>[]) => Object.assign({}, ...sources)) as Merge
