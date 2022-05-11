import { test } from "vitest";
import { arrayAll } from "@unboxing/array"

test('test array all',()=>{
  var lessThan2 = (x:number) => x < 2
  var lessThan3 = (x:number) => x < 3;
  console.log(arrayAll(lessThan2)([1, 2]))
  console.log(arrayAll(lessThan3)([1, 2]))
})
