import { sliceArray } from "@unboxing/array";
import { test } from "vitest";

test('test slice array',()=>{
  console.log(sliceArray(1, 3, ['a', 'b', 'c', 'd']))
})
