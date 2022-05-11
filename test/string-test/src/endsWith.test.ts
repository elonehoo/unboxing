import { endsWith } from "@unboxing/string";
import { test } from "vitest";

test('test ends with',()=>{
  console.log(endsWith('c', 'abc'))
  console.log(endsWith('b', 'abc'))
})
