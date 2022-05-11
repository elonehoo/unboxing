import { comparator } from '@unboxing/function'
import { test } from 'vitest'

test('test comparator', () => {
  const byAge = comparator((a, b) => a.age < b.age)
  const people = [
    { name: 'Alice', age: 27 },
    { name: 'Bob', age: 33 },
  ]

  console.log(byAge(people[0], people[1]))
})
