import { mapObject } from '@unboxing/object'
import { test } from 'vitest'

test('test map object', () => {
  const double = (x: number) => x * 2
  console.log(mapObject(double, { x: 1, y: 2, z: 3 }))
})
