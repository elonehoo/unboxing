import { equal } from "@unboxing/is";
import { test } from "vitest";

test('test is equal',()=>{
  console.log(equal(1, 1))
  console.log(equal(1, '1'))
  console.log(equal([1, 2, 3], [1, 2, 3]))
  console.log(equal({ a: { b: 1 }}, { a: { b: 1 }}))
})
