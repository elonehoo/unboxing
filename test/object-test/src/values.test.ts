import { values } from '@unboxing/object'
import { test } from 'vitest'

test('test values', () => {
  console.log(values({ a: 1, b: 2, c: 3 }))
})
