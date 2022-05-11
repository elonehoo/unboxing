import type { Pred } from '@unboxing/core'

interface Cond {
  <T, F extends (args: any|any[]) => any>(fns: ArrayLike<[Pred<T>, F]>): (...args: T[]) => ReturnType<F>
}

export const cond = (<T, F extends Function>(pairs: [Pred<T>, F][]) =>
  function (...args) {
    for (let i = 0; i < pairs.length; i++) {
      if (pairs[i][0].apply(this, args))
        return pairs[i][1].apply(this, args)
    }
  }
)as Cond
