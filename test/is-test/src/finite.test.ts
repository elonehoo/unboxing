import { isFinite } from "@unboxing/is";
import { test } from "vitest";

test('test is finite',()=>{
  console.log(isFinite(1))
  console.log(isFinite(null))
})
