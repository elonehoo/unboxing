import { test } from "vitest";
import {isFunction} from '@unboxing/is'
test('test is function',()=>{
  console.log(isFunction(()=>{}))
  console.log(isFunction(null))
})
