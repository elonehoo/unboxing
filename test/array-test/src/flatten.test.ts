import { flatten } from "@unboxing/array";
import { test } from "vitest";

test('test flatten',()=>{
  console.log(flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]))
})
