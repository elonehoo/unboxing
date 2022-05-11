import { test } from 'vitest'
import { toPairs } from '@unboxing/object'

test('test to pairs', () => {
  console.log(toPairs({ a: 1, b: 2, c: 3 }))
})
