import { findString } from "@unboxing/array";
import { test } from "vitest";

test('test find string',()=>{
  var xs = [{a: 1}, {a: 2}, {a: 3}]
  console.log(findString((x:any) => x.a === 2)(xs))
  console.log(findString((x:any) => x.a === 4)(xs))
})
