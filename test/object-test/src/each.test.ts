import { test } from 'vitest'
import { eachObject } from '@unboxing/object'

test('test each object', () => {
  const printKeyConcatValue = (value: any, key: any) => console.log(`${key}:${value}`)
  eachObject(printKeyConcatValue, { x: 1, y: 2 })
})
