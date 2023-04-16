import { lengthArray } from '@unboxing/array'
import { test } from 'vitest'

test('test length array', () => {
  console.log(lengthArray([]))
  console.log(lengthArray([1, 2, 3, 4]))
})
