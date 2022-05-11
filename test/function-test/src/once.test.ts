import { once } from '@unboxing/function'
import { test } from 'vitest'

test('test once', () => {
  const addOneOnce = once(x => x + 1)
  console.log(addOneOnce(10))
  console.log(addOneOnce(50))
})
