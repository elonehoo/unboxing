import { curryN } from "./curryN"

interface Tap {
  <T>(fn: (a: T) => any, value: T): T;
  <T>(fn: (a: T) => any): (value: T) => T;
}

// Runs the given function with the supplied argument, then returns the argument.
export const tap = curryN(2, <T>(fn: (a: T) => any, x: T) => {
  fn(x);
  return x;
}) as Tap
