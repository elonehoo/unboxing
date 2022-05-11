import type { Paths, Prop } from '@unboxing/core'
import { curryN } from '@unboxing/function'

export interface Path {
  <K extends Prop, O extends Record<K, any>>(path: [K], obj: O): O[K]
  <K extends Prop>(path: [K]): <O extends Record<K, any>>(obj: O) => O[K]
  <T>(path: Paths, obj: any): T | undefined
  <T>(path: Paths): (obj: any) => T | undefined
}

// Retrieve the value at a given path.
export const path = curryN(2, <K extends Prop, O extends Record<K, any>>(paths: Paths = [], obj: O = {} as any) => {
  let val: any = obj

  for (let i = 0; i < paths.length; i++) {
    if (val == null)
      return

    val = val[paths[i]]
  }

  return val
}) as Path
