import { anyArray } from "@unboxing/array";
import { test } from "vitest";

test('test any string',()=>{
  var lessThan0 = (x:number) => x < 0
  var lessThan2 = (x:number) => x < 2

  console.log(anyArray(lessThan0)([1, 2]))
  console.log(anyArray(lessThan2)([1, 2]))
})
