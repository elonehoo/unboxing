import { filterObject, pathEq } from '@unboxing/object'
import { test } from 'vitest'

test('test path eq', () => {
  const user1 = { address: { zipCode: 90210 } }
  const user2 = { address: { zipCode: 55555 } }
  const user3 = { name: 'Bob' }
  const users = [user1, user2, user3]
  const isFamous = pathEq(['address', 'zipCode'], 90210)
  console.log(filterObject(isFamous, users))
})
