import { test } from "vitest";
import {updatePropertyValue} from "@unboxing/function"

test.skip('test updatePropertyValue',()=>{
  var fn = () => {}
  var updateName = updatePropertyValue('name', 'newFn')
  console.log(fn.name)
  var newFn = updateName(fn)
  console.log(newFn.name)
  console.log(fn.name)
})
