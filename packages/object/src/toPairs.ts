import type { KeyValuePairs, Prop } from '@unboxing/core'
import { objectKeys } from './keys'

interface ToPairs {
  <K extends Prop, V>(obj: Record<K, V>): KeyValuePairs<K & string, V>
}

/**
 * Converts an object into an array of key, value arrays. Only the object's
 * own properties are used.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 */
export const toPairs = (<K extends Prop, V>(obj: Record<K, V> = {} as any) => {
  const keys = objectKeys(obj)
  const len = keys.length
  const result = new Array(len)

  for (let i = 0; i < len; i++)
    result[i] = [keys[i], obj[keys[i]]]

  return result
}) as ToPairs
