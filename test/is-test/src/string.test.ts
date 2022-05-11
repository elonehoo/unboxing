import { isString } from '@unboxing/is'
import { test } from 'vitest'

test('test is string', () => {
  console.log(isString('abc'))
  console.log(isString(null))
  console.log(isString(new String('abc')))
})
