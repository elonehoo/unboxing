import { test } from 'vitest'
import { identity } from '@unboxing/function'

test('test identity', () => {
  console.log(identity(1)) // -> 1
  console.log(identity(true)) // -> true
  console.log(identity(false)) // -> false
})
