import { test } from 'vitest'
import { tap } from '@unboxing/function'

test('test tap', () => {
  const sayX = x => console.log(`x is ${x}`)
  tap(sayX, 100)
})
