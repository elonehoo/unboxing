import { size } from "@unboxing/object";
import { test } from "vitest";

test('test size',()=>{
  console.log(size({ 'a': 1, 'b': 2 }))
})
