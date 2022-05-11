import { test } from 'vitest'
import { createCache } from '@unboxing/function'

test('test create cache', () => {
  const cache = createCache()
  cache.set('a', '5')
  console.log(cache.get('a')) // -> 5
  console.log(cache.has('a')) // -> true
})
