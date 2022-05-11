import { Paths, Prop, ObjBase } from '@unboxing/core'
import { curryN } from '@unboxing/function'
import { path } from './path'

interface PathApply {
  <K extends Prop, O extends Record<K, any>, R>(path: [K], fn: ObjBase<K, O[K], R>, obj: O): R;
  <K extends Prop, V, R>(path: [K], fn: ObjBase<K, V, R>): (obj:any) => R;
  <K extends Prop>(path: [K]): {
      <O extends Record<K, any>, R>(fn: ObjBase<K, O[K], R>, obj: O): R;
      <V, R>(fn: ObjBase<K, V, R>): (obj:any) => R;
  };
  <V, R>(path: Paths, fn: ObjBase<Paths, V, R>, obj:any): R;
  <V, R>(path: Paths, fn: ObjBase<Paths, V, R>): (obj:any) => R;
  (path: Paths): {
      <V, R>(fn: ObjBase<Paths, V, R>, obj:any): R;
      <V, R>(fn: ObjBase<Paths, V, R>): (obj:any) => R;
  };
}

// Returns the result of `fn` with given value at `path`.
export const pathApply = curryN(3, <R>(paths: Paths = [], fn: ObjBase<Paths, any, any>, obj = {}) =>
    fn(path(paths, obj), paths, obj)
) as PathApply
