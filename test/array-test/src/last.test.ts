import { last } from "@unboxing/array";
import { test } from "vitest";

test('test last',()=>{
  console.log(last(['fi', 'fo', 'fum']))
  console.log(last([]))
})
