import { startsWith } from "@unboxing/string";
import { test } from "vitest";

test('test start with',()=>{
  console.log(startsWith('a', 'abc'))
  console.log(startsWith('b', 'abc'))
})
