import type { KeyValuePairs, Prop } from '@unboxing/core'

interface FromPairs {
  <K extends Prop, V>(pairs: KeyValuePairs<K, V>): Record<K, V>
}

// Creates a new object from a list key-value pairs. If a key appears in multiple pairs, the rightmost pair is included in the object.
export const fromPairs = (<K extends Prop, V>(arr: KeyValuePairs<K, V> = []) => {
  const result: { [k in K]: V } = {} as any

  for (let i = 0; i < arr.length; i++)
    result[arr[i][0]] = arr[i][1]

  return result
}) as FromPairs
