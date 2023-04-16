import { dropArray } from '@unboxing/array'
import { test } from 'vitest'

test('test drop array', () => {
  console.log(dropArray(1, ['foo', 'bar', 'baz']))
  console.log(dropArray(2, ['foo', 'bar', 'baz']))
  console.log(dropArray(3, ['foo', 'bar', 'baz']))
  console.log(dropArray(4, ['foo', 'bar', 'baz']))
})
