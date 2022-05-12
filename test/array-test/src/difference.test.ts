import { difference } from "@unboxing/array";
import { test } from "vitest";

test('test difference',()=>{
  console.log(difference([1,2,3,4], [7,6,5,4,3]))
  console.log(difference([7,6,5,4,3], [1,2,3,4]))
})
