import { test } from 'vitest'
import { compose } from '@unboxing/function'

test('test compose', () => {
  const f = compose(x => x + 1, x => -x, Math.pow)
  console.log(f(3, 4))
})
