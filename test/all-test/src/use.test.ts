import { test } from 'vitest'
import { compose, map, pathOr, toLower } from '@unboxing/unboxing'

test('test use', () => {
  const toLowerName = compose(
    toLower,
    pathOr(['name'], ''),
  )
  const result = map(toLowerName)([{ name: 'testA' }, { name: 'testb' }])
  console.log(result)
})
