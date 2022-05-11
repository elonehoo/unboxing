import { test } from 'vitest'
import { typeOf, uniqueId } from '@unboxing/core'

test('test unique id', () => {
  console.log(uniqueId()) // -> '1651658044131'
  console.log(typeof uniqueId()) // -> number
  console.log(typeOf(uniqueId())) // -> 'Number'
})
