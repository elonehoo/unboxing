import { test } from 'vitest'
import { toString } from '@unboxing/string'
test('test to string', () => {
  console.log(toString(null))
  console.log(toString('test'))
  console.log(toString([1, 2, 3]))
})
