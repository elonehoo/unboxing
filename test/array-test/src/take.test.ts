import { takeArray } from '@unboxing/array'
import { test } from 'vitest'

test('test take array', () => {
  console.log(takeArray(1, ['foo', 'bar', 'baz']))
  console.log(takeArray(2, ['foo', 'bar', 'baz']))
  console.log(takeArray(3, ['foo', 'bar', 'baz']))
  console.log(takeArray(4, ['foo', 'bar', 'baz']))
  console.log(takeArray(3, 'ramda'))
})
