import { curryN } from "@unboxing/function"
import { path } from "./path"
import { Paths, CurriedFunction2 } from '@unboxing/core'

interface PathEq {
  (path: Paths, val:any, obj:any): boolean;
  (path: Paths, val:any): (obj:any) => boolean;
  (path: Paths): CurriedFunction2<any, any, boolean>;
}

// Determines whether a nested path on an object has a specific value
export const pathEq = curryN(3, (paths: Paths = [], value:any, obj = {}) => path(paths, obj) === value) as PathEq
