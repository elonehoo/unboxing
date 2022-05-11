import { applyOrReturn } from '@unboxing/function'
import { test } from 'vitest'

test('test apple or return', () => {
  console.log(applyOrReturn([1, 2, 3], (...args) => args))
  console.log(applyOrReturn([1, 2, 3], 'test'))
})
