import { filterObject } from "@unboxing/object";
import { test } from "vitest";

test('test filter object',()=>{
  var isEven = (n:number) => n % 2 === 0
  console.log(filterObject(isEven, {a: 1, b: 2, c: 3, d: 4}))
})
