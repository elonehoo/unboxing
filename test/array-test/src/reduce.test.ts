import { reduceArray } from "@unboxing/array";
import { test } from "vitest";
test('test reduce array',()=>{
  var numbers = [1, 2, 3]
  var plus = (a:number, b:number) => a + b
  console.log(reduceArray(plus, 10, numbers))
})
