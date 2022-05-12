import { findStringIndex } from "@unboxing/array";
import { test } from "vitest";

test('test find string index',()=>{
  var xs = [{a: 1}, {a: 2}, {a: 3}]
  console.log(findStringIndex((x:any) => x.a === 2)(xs))
  console.log(findStringIndex((x:any) => x.a === 4)(xs))
})
