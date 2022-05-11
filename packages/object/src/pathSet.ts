import type { Paths, Prop, ReplaceType } from '@unboxing/core'
import { assign } from '@unboxing/core'
import { curryN } from '@unboxing/function'
import { isNum, isObject } from '@unboxing/is'
import { has } from './has'

interface PathSet {
  <K extends Prop, V, O>(path: [K], value: V, obj: O): ReplaceType<O, K, V>
  <K extends Prop, V>(path: [K], value: V): <O>(obj: O) => ReplaceType<O, K, V>
  <K extends Prop>(path: [K]): {
      <V, O>(value: V, obj: O): ReplaceType<O, K, V>
      <V>(value: V): <O>(obj: O) => ReplaceType<O, K, V>
  }
  <O>(path: Paths, value: any, obj: O): O
  (path: Paths, value: any): <O>(obj: O) => O
  (path: Paths): {
      <O>(value: any, obj: O): O
      (value: any): <O>(obj: O) => O
  }
}

//  * Returns the result of "setting" the portion of the given data structure focused by the given paths to the given value.
export const pathSet = curryN(3, (paths: Paths = [], value: any, obj = {}) => {
  const n = paths.length - 1
  const result = assign(obj)
  const key = paths[n]
  let val: any = result
  let v

  for (let i = 0; i < n; i++) {
    v = val[paths[i]]
    if (isObject(v))
      v = assign(v)
    else
      v = isNum(paths[i + 1]) ? [] : {}

    val[paths[i]] = v
    val = v
  }

  if (has(key, val) && val[key] === value)
    return obj

  val[key] = value

  return result
}) as PathSet
