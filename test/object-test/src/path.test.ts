import { path } from "@unboxing/object";
import { test } from "vitest";

test('test path',()=>{
  console.log(path(['a', 'b'], {a: {b: 2}}))
  console.log(path(['a', 'b'], {c: {b: 2}}))
})
