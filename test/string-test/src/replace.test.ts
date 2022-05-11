import replace from '@unboxing/string/src/replace'
import { test } from 'vitest'

test('test replace', () => {
  console.log(replace('foo', 'bar', 'foo foo foo'))
  console.log(replace(/foo/, 'bar', 'foo foo foo'))
  console.log(replace(/foo/g, 'bar', 'foo foo foo'))
})
