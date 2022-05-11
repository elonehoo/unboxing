import { isUndefined } from '@unboxing/is'
import { test } from 'vitest'

test('test is undefined', () => {
  console.log(isUndefined(void 0))
  console.log(isUndefined(null))
})
