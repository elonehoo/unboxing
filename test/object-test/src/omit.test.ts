import { omit } from '@unboxing/object'
import { test } from 'vitest'

test('test omit', () => {
  console.log(omit(['a', 'd'], { a: 1, b: 2, c: 3, d: 4 }))
})
