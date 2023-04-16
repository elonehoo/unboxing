import { intersection } from '@unboxing/array'
import { test } from 'vitest'

test('test intersection', () => {
  console.log(intersection([1, 2, 3, 4], [7, 6, 5, 4, 3]))
})
