import { split } from "@unboxing/string";
import { test } from "vitest";

test('test split',()=>{
  console.log(split('.', 'a.b.c.xyz.d'))
})
