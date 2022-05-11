import { anyString } from "@unboxing/array";
import { test } from "vitest";

test('test any string',()=>{
  var lessThan0 = (x:number) => x < 0
  var lessThan2 = (x:number) => x < 2

  console.log(anyString(lessThan0)([1, 2]))
  console.log(anyString(lessThan2)([1, 2]))
})
