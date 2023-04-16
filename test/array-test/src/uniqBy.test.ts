import { uniqueBy } from '@unboxing/array'
import { test } from 'vitest'

test('test unique by', () => {
  console.log(uniqueBy(x => x % 2, [1, 2, 2, 3, 4, 5, 5, 5]))
})
