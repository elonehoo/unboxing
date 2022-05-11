import { test } from 'vitest'
import { rejectWith } from '@unboxing/promise'

test('test reject with', () => {
  rejectWith(toLowerCase, 'ABC').catch(err => console.error(err))
})

function toLowerCase(value: any): string {
  return value.toLowerCase()
}
