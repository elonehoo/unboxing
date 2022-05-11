import { test } from 'vitest'
import { flip } from '@unboxing/function'

test('test filp', () => {
  const neg = (a, b) => a - b
  console.log(flip(neg)(3, 5))
})
