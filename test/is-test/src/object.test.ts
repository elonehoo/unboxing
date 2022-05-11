import { isObject } from '@unboxing/is'
import { test } from 'vitest'

test('test is object', () => {
  console.log(isObject({ a: 'test' }))
  console.log(isObject(null))
})
