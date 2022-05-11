import { test } from 'vitest'
import { typeOf } from '@unboxing/core'

test('test type of', () => {
  console.log(typeOf({})) // -> 'Object'
  console.log(typeOf(1)) // -> 'Number'
  console.log(typeOf(false)) // -> 'Boolean'
  console.log(typeOf('string')) // -> 'String'
  console.log(typeOf(null)) // -> 'Null'
  console.log(typeOf([])) // -> 'Array'
  console.log(typeOf(/[A-z]/)) // -> 'RegExp'
})
