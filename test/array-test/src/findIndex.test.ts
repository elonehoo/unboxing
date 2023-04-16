import { findArrayIndex } from '@unboxing/array'
import { test } from 'vitest'

test('test find string index', () => {
  const xs = [{ a: 1 }, { a: 2 }, { a: 3 }]
  console.log(findArrayIndex((x: any) => x.a === 2)(xs))
  console.log(findArrayIndex((x: any) => x.a === 4)(xs))
})
