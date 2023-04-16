import { either } from '@unboxing/function'
import { test } from 'vitest'

test('test either', () => {
  const gt10 = x => x > 10
  const even = x => x % 2 === 0
  const f = either(gt10, even)
  console.log(f(101))
  console.log(f(8))
  console.log(f(3))
})
