import { unique } from '@unboxing/array'
import { test } from 'vitest'

test('test uniq', () => {
  console.log(unique([1, 2, 1, 2, 3, 4, 1, 2]))
})
