import { range } from '@unboxing/array'
import { test } from 'vitest'

test('test range', () => {
  console.log(range(4))
  console.log(range(-4))
  console.log(range(1, 5))
  console.log(range(0, 20, 5))
  console.log(range(0, -4, -1))
  console.log(range(0))
})
