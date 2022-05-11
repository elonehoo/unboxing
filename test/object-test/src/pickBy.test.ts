import { pickBy } from '@unboxing/object'
import { test } from 'vitest'

test('test pick by', () => {
  console.log(pickBy((x: any) => x > 2, { a: 1, b: 2, c: 3, d: 4 }))
})
