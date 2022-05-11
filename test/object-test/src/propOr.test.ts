import { propOr } from '@unboxing/object'
import { test } from 'vitest'

test('test prop or', () => {
  const alice = {
    name: 'ALICE',
    age: 101,
  }
  console.log(propOr('name', 'Bob')(alice))
  console.log(propOr('favoriteLibrary', 'react')(alice))
})
