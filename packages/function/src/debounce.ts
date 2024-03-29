import type { Func } from '@unboxing/core'
import { curryN } from './curryN'

interface DebounceFunc<T extends () => any> {
  (...args: Parameters<T>): void
  cancel: Function
}

interface Debounce {
  <F extends Func>(wait: number, fn: F): DebounceFunc<F>
  (wait: number): <F extends Func>(fn: F) => DebounceFunc<F>
}

export const debounce = curryN(
  2,
  <F extends Func>(wait: number, fn: F): DebounceFunc<F> => {
    let timeout: any

    function f() {
      const args = arguments
      clearTimeout(timeout)
      timeout = setTimeout(
        () => fn.apply(this, args),
        wait,
      )
    }

    f.cancel = () => clearTimeout(timeout)

    return f
  },
) as Debounce
