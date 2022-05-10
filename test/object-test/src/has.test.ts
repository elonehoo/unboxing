import { test } from "vitest"
import {has} from '@unboxing/object'

test('test has',()=>{
  var hasName = has('name')
  console.log(hasName({name: 'alice'}))
  console.log(hasName({name: 'bob'}))
  console.log(hasName({}))
})
