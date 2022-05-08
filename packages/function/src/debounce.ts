import { curryN } from "./curryN"
import { Func } from "@unboxing/core"

interface DebounceFunc<T extends () => any> {
  (...args: Parameters<T>): void;
  cancel: Function;
}

interface Debounce {
  <F extends Func>(wait: number, fn: F): DebounceFunc<F>;
  (wait: number): <F extends Func>(fn: F) => DebounceFunc<F>;
}

export const debounce = curryN(
  2,
  <F extends Func>(wait: number, fn: F): DebounceFunc<F> => {
      let timeout;

      function f() {
          let args = arguments;
          clearTimeout(timeout);
          timeout = setTimeout(
              () => fn.apply(this, args), // eslint-disable-line prefer-rest-params
              wait
          );
      }

      f.cancel = () => clearTimeout(timeout);

      return f;
  }
) as Debounce
