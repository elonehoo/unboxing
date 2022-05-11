import { test } from 'vitest'
import { not } from '@unboxing/core'

test('test not', () => {
  console.log(not(true)) // -> false
  console.log(not(false)) // -> true
  console.log(not(0)) // -> true
  console.log(not(1)) // -> false
  console.log(not('')) // -> true
  console.log(not(' ')) // -> false
  console.log(not('0')) // -> false
  console.log(not('1')) // -> false
  console.log(not([])) // -> false
  console.log(not([1])) // -> false
  console.log(not({})) // -> false
  console.log(not({ a: 1 })) // -> false
})
