import { pathSet } from '@unboxing/object'
import { test } from 'vitest'

test('test path set', () => {
  console.log(pathSet(['a', 'b'], 3, {}))
})
