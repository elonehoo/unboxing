import { isNil } from "@unboxing/is";
import { test } from "vitest";

test('test is nil',()=>{
  console.log(isNil(undefined))
  console.log(isNil(null))
  console.log(isNil('null'))
  console.log(isNil(5))
})
