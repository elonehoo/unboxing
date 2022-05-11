import { escapeRegExp } from '@unboxing/string'
import { test } from 'vitest'

test('test escape reg exp', () => {
  console.log(escapeRegExp('[test](utils)'))
})
