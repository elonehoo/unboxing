import { reject } from "@unboxing/array";
import { test } from "vitest";
test('test reject',()=>{
  var isEven = n => n % 2 === 0
  console.log(reject(isEven, [1, 2, 3, 4]))
})
