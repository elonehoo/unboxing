import { curryN } from "./curryN"
import { ThrottleFunc, Throttle } from './throttle'
import { Func } from "@unboxing/core"

// Creates a throttled function that only invokes `fn` at most once per every `wait` milliseconds. `fn` is called in the end of `wait` delay
export const throttleEnd = curryN(
  2,
  <F extends Func>(wait: number, fn: F): ThrottleFunc<F> => {
      let lastCalled:any;
      let lastArgs:any;
      let lastThis:any;
      let timeout:any;

      return function(...args) {
          const now = Date.now();
          const diff = lastCalled + wait - now;

          if (diff < 0 && timeout) {
              clearTimeout(timeout);
              timeout = null;
              fn.apply(this, args);
          } else if (!timeout) {
              timeout = setTimeout(() => {
                  fn.apply(lastThis, lastArgs);
                  timeout = null;
              }, wait);
          }

          lastCalled = now;
          lastArgs = args;
          lastThis = this;
      };
  }
) as Throttle
