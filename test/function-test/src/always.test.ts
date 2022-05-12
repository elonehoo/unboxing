import { test } from 'vitest'
import { always } from '@unboxing/function'

test.skip('test alaways', () => {
  const f = always('Foo')
  console.log(f()) // -> 'Foo'
})
