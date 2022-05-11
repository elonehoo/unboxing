import type { Func } from '@unboxing/core'
import { curryN } from './curryN'

interface IfElse {
  <T, F>(condition: Func<boolean>, onTrue: Func<T>, onFalse: Func<F>): Func<T | F>
  <T>(condition: Func<boolean>, onTrue: Func<T>): <F>(onFalse: Func<F>) => Func<T | F>
  (condition: Func<boolean>): {
      <T, F>(onTrue: Func<T>, onFalse: Func<F>): Func<T | F>
      <T>(onTrue: Func<T>): <F>(onFalse: Func<F>) => Func<T | F>
  }
}

// Creates a function that will process either the `onTrue` or the `onFalse` function depending upon the result of the `condition` predicate.
export const ifelse = curryN(3, (condition: any, onTrue: any, onFalse: any) => (args: any|any[]) =>
  condition(args) ? onTrue(args) : onFalse(args),
) as IfElse
