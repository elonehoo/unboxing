import { isEqual } from "@unboxing/is";
import { test } from "vitest";

test('test is equal',()=>{
  console.log(isEqual(1, 1))
  console.log(isEqual(1, '1'))
  console.log(isEqual([1, 2, 3], [1, 2, 3]))
  console.log(isEqual({ a: { b: 1 }}, { a: { b: 1 }}))
})
