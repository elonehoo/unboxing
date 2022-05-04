import { test } from 'vitest'
import {negate} from '@unboxing/core'

test('test negate',()=>{
  console.log(negate(42)) // -> -42
})
