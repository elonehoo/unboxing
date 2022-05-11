import { test } from 'vitest'
import { anyObject } from '@unboxing/object'

test('test any object', () => {
  const isBiggerThanZero = (x: number) => x > 0
  console.log(anyObject(isBiggerThanZero, {}))
  console.log(anyObject(isBiggerThanZero, { a: 0 }))
  console.log(anyObject(isBiggerThanZero, { a: 0, b: 1, c: 0 }))
  console.log(anyObject(isBiggerThanZero, { a: 1, b: 0, c: -1 }))
  console.log(anyObject(isBiggerThanZero)({ a: 0, b: 0, c: 0 }))
  console.log(anyObject(isBiggerThanZero)({ a: 0, b: 1, c: 0 }))
})
