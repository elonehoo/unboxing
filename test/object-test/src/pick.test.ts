import { pick } from "@unboxing/object";
import { test } from "vitest";

test('test pick',()=>{
  console.log(pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}))
  console.log(pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}))
})
