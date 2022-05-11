import { reduce } from "@unboxing/object";
import { test } from "vitest";

test('test reduce',()=>{
  var obj = { a: 1, b: 2, c: 3}
  var plus = (a:number, b:number) => a + b
  console.log(reduce(plus, 10, obj))
})
