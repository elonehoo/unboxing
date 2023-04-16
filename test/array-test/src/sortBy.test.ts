import { sortArrayBy } from '@unboxing/array'
import { test } from 'vitest'

test('test sort array by', () => {
  const sortByFirstItem = sortArrayBy(x => x[0])
  const pairs = [[-1, 1], [-2, 2], [-3, 3]]
  console.log(sortByFirstItem(pairs))
})
