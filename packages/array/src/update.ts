import { always, curryN } from '@unboxing/function'
import { adjustArray } from './adjust'

interface Update {
  <T>(index: number, value: T, list: ArrayLike<T>): T[]
  <T>(index: number, value: T): (list: ArrayLike<T>) => T[]
  <T>(index: number): {
      <T>(value: T, list: ArrayLike<T>): T[]
      <T>(value: T): (list: ArrayLike<T>) => T[]
  }
}

export const updateArray = curryN(3, <T>(idx: number, x: T, list: ArrayLike<T>) => adjustArray(always(x), idx, list)) as Update
