import { curryN } from '@unboxing/function'
import type { CurriedFunction2, Paths } from '@unboxing/core'
import { path } from './path'

interface PathEq {
  (path: Paths, val: any, obj: any): boolean
  (path: Paths, val: any): (obj: any) => boolean
  (path: Paths): CurriedFunction2<any, any, boolean>
}

// Determines whether a nested path on an object has a specific value
export const pathEq = curryN(3, (paths: Paths = [], value: any, obj = {}) => path(paths, obj) === value) as PathEq
