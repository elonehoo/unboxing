import { propApply } from '@unboxing/object'
import { test } from 'vitest'

test('test prop apple', () => {
  console.log(propApply('a', x => `is ${x}`, { a: 2 }))
  console.log(propApply('b', x => x > 0, { b: 2 }))
})
