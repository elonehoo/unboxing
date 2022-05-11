import { filterObject, propEq } from '@unboxing/object'

import { test } from 'vitest'

test('test prop eq', () => {
  const abby = { name: 'Abby', age: 7, hair: 'blond' }
  const fred = { name: 'Fred', age: 12, hair: 'brown' }
  const rusty = { name: 'Rusty', age: 10, hair: 'brown' }
  const alois = { name: 'Alois', age: 15, disposition: 'surly' }
  const kids = [abby, fred, rusty, alois]
  const hasBrownHair = propEq('hair', 'brown')
  console.log(filterObject(hasBrownHair, kids))
})
