import { test } from 'vitest'
import { mergeWith } from '@unboxing/object'

test('test mergeWith', () => {
  console.log(mergeWith((x: any, y: any) => x + y, { name: 'fred', age: 10 }, { age: 40 }))
})
