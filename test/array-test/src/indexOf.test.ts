import { indexOf } from "@unboxing/array";
import { test } from "vitest";

test('test index of',()=>{
  console.log(indexOf(3, [1,2,3,4]))
  console.log(indexOf(10, [1,2,3,4]))
})
