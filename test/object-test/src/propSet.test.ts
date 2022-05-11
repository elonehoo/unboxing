import { propSet } from '@unboxing/object'
import { test } from 'vitest'

test('test prop set', () => {
  console.log(propSet('c', 3, { a: 1, b: 2 }))
})
