import { includes } from "@unboxing/array";
import { test } from "vitest";

test('test includes',()=>{
  console.log(includes(3, [1, 2, 3]))
  console.log(includes(4, [1, 2, 3]))
  console.log(includes('test', 'vitest'))
})
