import { isArrayLike } from '@unboxing/is'
import { test } from 'vitest'

test('test array like', () => {
  console.log(isArrayLike([]))
  console.log(isArrayLike({ 0: 'a', 1: 'b', length: 2 }))
  console.log(isArrayLike(null))
})
