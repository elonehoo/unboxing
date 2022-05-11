import { isArray } from "@unboxing/is";

export interface Assign {
  <T>(a: T): T;
  <T1, T2>(a: T1, b: T2): T1 & T2;
  <T1, T2, T3>(a: T1, b: T2, c: T3): T1 & T2 & T3;
  <T>(...args: T[]): T;
}

/**
 * Create a new object/array with the own properties of the first entry merged with
 * the own properties of the others objects. If a key exists in several objects,
 * the value from the last object will be used.
 */
export const assign = ((sources:any|any[]) => {
  if (isArray(sources[0])) {
      return Object.assign([], sources);
  }

  return Object.assign({}, sources);
}) as Assign
