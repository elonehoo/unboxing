import { test } from 'vitest'
import { deep } from '@unboxing/function'

test('test deep', () => {
  const addFlag = obj => ({ ...obj, flag: true })
  const memoize = deep(addFlag)
  const test = { id: 1, test: 2 }
  console.log(memoize(test, { test: 2 }))
  console.log(memoize(test, { test: 2 }))
  test.id = 123
  console.log(memoize(test))
})
