import { zip } from '@unboxing/array'
import { test } from 'vitest'

test('test zip', () => {
  console.log(zip([1, 2, 3], ['a', 'b', 'c']))
})
