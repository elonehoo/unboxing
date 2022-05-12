import { updateArray } from "@unboxing/array";
import { test } from "vitest";

test('test update array',()=>{
  console.log(updateArray(1, 11, [0, 1, 2]))
  console.log(updateArray(1)(11)([0, 1, 2]))
})
