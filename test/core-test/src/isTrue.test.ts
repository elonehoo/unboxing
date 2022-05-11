import { test } from 'vitest'
import { isTrue } from '@unboxing/core'

test('test is true', () => {
  console.log(isTrue(true))
  console.log(isTrue('true'))
  console.log(isTrue('false'))
})
