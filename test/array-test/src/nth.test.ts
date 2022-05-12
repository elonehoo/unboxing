import { nth } from "@unboxing/array";
import { test } from "vitest";

test('test nth',()=>{
  var list = ['foo', 'bar', 'baz', 'quux']
  console.log(nth(1, list))
  console.log(nth(2, list))
  console.log(nth(-1, list))
  console.log(nth(-99, list))
})
