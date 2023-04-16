import { zipWith } from '@unboxing/array'
import { test } from 'vitest'

test('test zip with', () => {
  const f = (x, y) => {
    // ...
  }
  console.log(zipWith(f, [1, 2, 3], ['a', 'b', 'c']))
})
