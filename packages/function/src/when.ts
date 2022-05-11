import type { Pred1 } from '@unboxing/core'
import { curryN } from './curryN'

interface When {
  <T, U>(pred: Pred1<T>, whenTrueFn: (a: T) => U, x: T): U | T
  <T, U>(pred: Pred1<T>, whenTrueFn: (a: T) => U): (x: T) => U | T
  <T>(pred: Pred1<T>): {
      <U>(whenTrueFn: (a: T) => U, x: T): U | T
      <U>(whenTrueFn: (a: T) => U): (x: T) => U | T
  }
}

export const when = curryN(3, (pred: any, onTrue: any, x: any) => {
  if (pred(x))
    return onTrue(x)

  return x
}) as When
