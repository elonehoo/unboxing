import { assign } from '@unboxing/core'
import { test } from 'vitest'

test('test assign', () => {
  console.log(assign({ a: 1 }, { b: 2 }))
  console.log(assign([1, 2, 3], [4, 5]))
})
