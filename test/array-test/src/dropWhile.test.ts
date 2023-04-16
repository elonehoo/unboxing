import { dropArrayWhile } from '@unboxing/array'
import { test } from 'vitest'

test('test drop array while', () => {
  const lteTwo = (x: number) => x <= 2
  console.log(dropArrayWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]))
})
