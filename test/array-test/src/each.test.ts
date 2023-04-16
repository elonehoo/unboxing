import { eachArray } from '@unboxing/array'
import { test } from 'vitest'

test('test each string', () => {
  const printXPlusFive = (x: number) => console.log(x + 5)
  console.log(eachArray(printXPlusFive, [1, 2, 3]))
})
