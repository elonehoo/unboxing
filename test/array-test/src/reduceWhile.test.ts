import { reduceWhile } from '@unboxing/array'
import { test } from 'vitest'

test('test reduce while', () => {
  console.log(reduceWhile(acc => acc.length < 3, (acc, x) => acc + x, '1', ['2', '3', '4', '5']))
})
