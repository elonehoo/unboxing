import { test } from "vitest";
import {isArray} from '@unboxing/is'

test('test array',()=>{
  console.log(isArray([]))
  console.log(isArray(null))

})
