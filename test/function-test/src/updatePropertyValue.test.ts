import { test } from 'vitest'
import { updatePropertyValue } from '@unboxing/function'

test.skip('test updatePropertyValue', () => {
  const fn = () => {}
  const updateName = updatePropertyValue('name', 'newFn')
  console.log(fn.name)
  const newFn = updateName(fn)
  console.log(newFn.name)
  console.log(fn.name)
})
