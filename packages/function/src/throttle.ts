import { curryN } from "./curryN"
import { Func } from "@unboxing/core"

export type ThrottleFunc<T extends Func> = (...args: Parameters<T>) => void;

export interface Throttle {
    <F extends Func>(wait: number, fn: F): ThrottleFunc<F>;
    (wait: number): <F extends Func>(fn: F) => ThrottleFunc<F>;
}

// Creates a throttled function that only invokes `fn` at most once per every `wait` milliseconds. `fn` is called in start of `wait` delay
export const throttle = curryN(
  2,
  <F extends Func>(wait: number, fn: F): ThrottleFunc<F> => {
      let lastCalled:any;
      let timeout:any;

      return function(...args) {
          const now = Date.now();
          const diff = lastCalled + wait - now;

          if (lastCalled && diff > 0) {
              clearTimeout(timeout);
              timeout = setTimeout(() => {
                  lastCalled = now;
                  fn.apply(this, args);
              }, diff);
          } else {
              lastCalled = now;
              fn.apply(this, args);
          }
      };
  }
) as Throttle
