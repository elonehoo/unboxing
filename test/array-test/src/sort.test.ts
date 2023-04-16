import { sortArray } from '@unboxing/array'
import { test } from 'vitest'

test('test sort array', () => {
  const diff = function (a: number, b: number) { return a - b }
  console.log(sortArray(diff, [4, 2, 7, 5]))
})
