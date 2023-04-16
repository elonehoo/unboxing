import { isStrictEqual } from '@unboxing/is'
import { test } from 'vitest'

test('test is strict equal', () => {
  console.log(isStrictEqual(1, 1))
  console.log(isStrictEqual(1, '1'))
  console.log(isStrictEqual({}, {}))
  console.log(isStrictEqual(NaN, NaN))
  console.log(isStrictEqual(-0, 0))
})
