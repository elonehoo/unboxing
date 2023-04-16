import { indexBy } from '@unboxing/array'
import { test } from 'vitest'

test('test index by', () => {
  const list = [{ id: 'xyz', title: 'A' }, { id: 'abc', title: 'B' }]
  console.log(indexBy(x => x.id, list))
})
