import { escape } from '@unboxing/string'
import { test } from 'vitest'

test('test escape', () => {
  console.log(escape('fred, barney, & pebbles'))
})
