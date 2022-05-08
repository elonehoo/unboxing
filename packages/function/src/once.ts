import { Func } from "@unboxing/core"

interface Once {
  <F extends Func>(fn: F): F;
}

export const once = (<F extends Func>(fn: F) => {
  let called = false;
  let result;

  return (...args) => {
      if (called) {
          return result;
      }

      result = fn(...args);
      called = true;

      return result;
  };
}) as Once
