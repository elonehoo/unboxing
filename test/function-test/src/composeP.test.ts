import { test } from 'vitest'
import { composeP } from '@unboxing/function'

test('test composeP', () => {
  const res = x => Promise.resolve(x)

  const f = composeP(x => res(-x), (x, y) => res(x ** y))
  f(3, 4).then(console.log)
})
