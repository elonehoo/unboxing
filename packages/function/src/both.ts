import { curryN } from "./curryN"
import {Pred} from '@unboxing/core'

interface Both {
  <T>(pred1: Pred<T>, pred2: Pred<T>): Pred<T>;
  <T>(pred1: Pred<T>): (pred2: Pred<T>) => Pred<T>;
}

export const both = curryN(2, <T>(f: Pred<T>, g: Pred<T>) => (...args) => f(...args) && g(...args)) as Both
