import { prop } from "@unboxing/object";
import { test } from "vitest";

test('test prop',()=>{
  console.log(prop('x', {x: 100}))
  console.log(prop('x', {}))
})
