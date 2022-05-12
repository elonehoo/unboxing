import { map } from "@unboxing/array";
import { test } from "vitest";

test('test map',()=>{
  var double = (x:number) => x * 2
  console.log(map(double, [1, 2, 3]))
})
