import { test } from 'vitest'
import { allObject } from '@unboxing/object'

test('test all object', () => {
  const isBiggerThanZero = (x: number) => x > 0
  console.log(allObject(isBiggerThanZero, {}))
  console.log(allObject(isBiggerThanZero, { a: 1 }))
  console.log(allObject(isBiggerThanZero, { a: 1, b: 1, c: 1 }))
  console.log(allObject(isBiggerThanZero, { a: 0, b: 1, c: 0 }))
  console.log(allObject(isBiggerThanZero, { a: 1, b: 0, c: 1 }))
  console.log(allObject(isBiggerThanZero)({ a: 0, b: 0, c: 0 }))
  console.log(allObject(isBiggerThanZero)({ a: 1, b: 0, c: 1 }))
})
