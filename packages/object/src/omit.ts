import { curryN } from '@unboxing/function'
import type { Prop } from '@unboxing/core'
import { objectKeys } from './keys'

type Omitted<T, K extends Prop> = Pick<T, Exclude<keyof T, K>>

interface Omit {
    <K extends Prop, O>(props: ReadonlyArray<K>, obj: O): Omitted<O, K>
    <K extends Prop>(props: ReadonlyArray<K>): <O>(obj: O) => Omitted<O, K>
}

// Returns a partial copy of an object omitting the keys specified.
export const omit = curryN(2, <K extends Prop>(props: ReadonlyArray<K> = [], obj = {}) => {
  const propsSet = Object.create(null)

  for (let i = 0; i < props.length; i++)
    propsSet[props[i]] = true

  const result = {}
  const keys = objectKeys(obj)

  for (let i = 0; i < keys.length; i++) {
    const prop = keys[i]

    if (!propsSet[prop])
      result[prop] = obj[prop]
  }

  return result
}) as Omit
