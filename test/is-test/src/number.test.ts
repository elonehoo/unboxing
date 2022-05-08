import { test } from "vitest";
import {isNum} from '@unboxing/is'
test('test is number',()=>{
  console.log(isNum(5))
  console.log(isNum(null))
})
