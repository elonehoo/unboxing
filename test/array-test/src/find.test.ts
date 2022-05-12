import { findArray } from "@unboxing/array";
import { test } from "vitest";

test('test find string',()=>{
  var xs = [{a: 1}, {a: 2}, {a: 3}]
  console.log(findArray((x:any) => x.a === 2)(xs))
  console.log(findArray((x:any) => x.a === 4)(xs))
})
