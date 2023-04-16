import { isEmpty } from '@unboxing/is'
import { test } from 'vitest'

test('test is empty', () => {
  console.log(isEmpty([]))
  console.log(isEmpty(null))
  console.log(isEmpty({}))
  console.log(isEmpty(''))
  console.log(isEmpty('test'))
  console.log(isEmpty({ a: 5 }))
  console.log(isEmpty([1]))
})
