import { test } from "vitest";
import {isBool} from '@unboxing/is'

test('test is boolean',()=>{
  console.log(isBool(false))
  console.log(isBool(new Boolean()))
  console.log(isBool(null))
})
