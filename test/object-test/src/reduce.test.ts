import { reduce } from '@unboxing/object'
import { test } from 'vitest'

test('test reduce', () => {
  const obj = { a: 1, b: 2, c: 3 }
  const plus = (a: number, b: number) => a + b
  console.log(reduce(plus, 10, obj))
})
