import { groupBy } from "@unboxing/object";
import { test } from "vitest";

test('test group',()=>{
  console.log(groupBy(x => x, { a: 1, b: 1, c: 3}))
})
