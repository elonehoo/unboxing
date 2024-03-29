import type { Pred } from '@unboxing/core'
import { curryN } from './curryN'

interface Both {
  <T>(pred1: Pred<T>, pred2: Pred<T>): Pred<T>
  <T>(pred1: Pred<T>): (pred2: Pred<T>) => Pred<T>
}

/**
 * A function wrapping calls to the two functions in an `&&` operation,
 * returning the result of the first function if it is false-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * false-y value.
 */
export const both = curryN(2, <T>(f: Pred<T>, g: Pred<T>) => (args: any | any[]) => f(args) && g(args)) as Both
