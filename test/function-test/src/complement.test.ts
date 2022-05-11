import { complement } from '@unboxing/function'
import { test } from 'vitest'

test('test complement', () => {
  const isNotNil = complement(isNil)

  console.log(isNil(null)) // true
  console.log(isNotNil(null)) // false

  console.log(isNil(7)) // false
  console.log(isNotNil(7)) // true
})

function isNil(value: any) {
  return value === undefined || value === null
}

