import { concat } from '@unboxing/array'
import { test } from 'vitest'

test('test concat', () => {
  console.log(concat('abc', 'cde'))
  console.log(concat([4, 5, 6], [1, 2, 3]))
  console.log(concat([], []))
})
