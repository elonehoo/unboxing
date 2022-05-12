import { splitArrayEvery } from "@unboxing/array";
import { test } from "vitest";

test('test split array every',()=>{
  console.log(splitArrayEvery(2, [1, 2, 3, 4, 5]))
})
