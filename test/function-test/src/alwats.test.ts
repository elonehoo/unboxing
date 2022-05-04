import {test} from 'vitest'
import { alaways } from '@unboxing/function'

test.skip('test alaways',()=>{
  let f = alaways('Foo')
  console.log(f()) // -> 'Foo'
})
