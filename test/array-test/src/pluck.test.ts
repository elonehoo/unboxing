import { pluck } from '@unboxing/array'
import { test } from 'vitest'

test('test pluck', () => {
  console.log(pluck('a')([{ a: 1 }, { a: 2 }]))
  console.log(pluck(0)([[1, 2], [3, 4]]))
})
