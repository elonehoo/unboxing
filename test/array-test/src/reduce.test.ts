import { reduceArray } from '@unboxing/array'
import { test } from 'vitest'

test('test reduce array', () => {
  const numbers = [1, 2, 3]
  const plus = (a: number, b: number) => a + b
  console.log(reduceArray(plus, 10, numbers))
})
