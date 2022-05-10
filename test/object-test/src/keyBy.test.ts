import { keyBy } from "@unboxing/object";
import { test } from "vitest";

test('test key by',()=>{
  console.log(keyBy(x => x < 2, { a: 0, b: 1, c: 3}))
})
