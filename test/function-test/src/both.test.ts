import { both } from '@unboxing/function'
import { test } from 'vitest'

test('test both', () => {
  const gt10 = (x: number) => x > 10
  const even = (x: number) => x % 2 === 0
  const f = both(gt10, even)
  console.log(f(100))
  console.log(f(101))
})
