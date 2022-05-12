import { withoutArray } from "@unboxing/array";
import { test } from "vitest";

test('test without array',()=>{
  console.log(withoutArray([1, 2], [1, 2, 1, 3, 4]))
})
