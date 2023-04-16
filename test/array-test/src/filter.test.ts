import { filterArray } from '@unboxing/array'
import { test } from 'vitest'

test('test filter string', () => {
  const isEven = (n: number) => n % 2 === 0
  console.log(filterArray(isEven, [1, 2, 3, 4]))
})
