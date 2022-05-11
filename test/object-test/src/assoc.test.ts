import { assoc } from '@unboxing/object'
import { test } from 'vitest'

test('test assoc', () => {
  console.log(assoc('c', 3, { a: 1, b: 2 }))
})
