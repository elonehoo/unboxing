import { curryN } from "./curryN"

type ApplyFunc<T> = (...args: T[]) => any

interface ApplyOrReturn {
    <T, F extends ApplyFunc<T>>(args: T[], test: F): ReturnType<F>
    <T, F>(args: T[], test: F extends Function ? ApplyFunc<T> : F): F
    <T>(args: T[]): <F extends ApplyFunc<T>>(test: F) => ReturnType<F>
    <T>(args: T[]): <F>(test: F extends Function ? ApplyFunc<T> : F) => F
}

// If `test` is function it calls with applied first argument, otherwise just returns `test`
export const applyOrReturn = curryN(2, <T>(args: T[], test: ApplyFunc<T>) => {
  if (typeof test === 'function') {
      return test(...args)
  }

  return test
}) as ApplyOrReturn
