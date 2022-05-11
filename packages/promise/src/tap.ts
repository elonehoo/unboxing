import { curryN } from '@unboxing/function'
import type { Void1 } from '@unboxing/core'

interface TapPromise {
  <T>(fn: Void1<T>, x: T): Promise<T>
  (fn: Void1): <T>(x: T) => Promise<T>
}

// Runs the given promise with the supplied argument. Returns the argument, when promise is resolved.
export const promiseTap = curryN(2, <T>(fn: Void1<T>, x: T) =>
  Promise.resolve()
    .then(() => fn(x))
    .then(() => x),
) as TapPromise
