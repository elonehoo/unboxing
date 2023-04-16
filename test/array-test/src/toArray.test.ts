import { toArray } from '@unboxing/array'
import { test } from 'vitest'

test('test to array', () => {
  console.log(toArray([1, 2, 3]))
  console.log(toArray(5))
  console.log(toArray('test'))
})
