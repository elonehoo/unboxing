import { test } from 'vitest'
import { curry } from '@unboxing/function'

test('test curry', () => {
  const addFourNumbers = (a: number, b: number, c: number, d: number) => a + b + c + d

  const curriedAddFourNumbers = curry(addFourNumbers)
  const f = curriedAddFourNumbers(1, 2)
  const g = f(3)
  console.log(g(4))
})
