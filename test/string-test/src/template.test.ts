import { template } from '@unboxing/string'
import { test } from 'vitest'

test('test template', () => {
  console.log(template({ fruit: 'banana' }, 'Petya has a %{fruit}'))
})
