import { takeRightWhile } from '@unboxing/array'
import { test } from 'vitest'

test('test take right while', () => {
  const isNotOne = (x: number) => x !== 1
  console.log(takeRightWhile(isNotOne, [1, 2, 3, 4]))
})
