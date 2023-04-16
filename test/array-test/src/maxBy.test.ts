import { maxBy } from '@unboxing/array'
import { test } from 'vitest'

test('test max by', () => {
  const objects = [{ n: 1 }, { n: 2 }]
  console.log(maxBy(o => o.n, objects))
})
