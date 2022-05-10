import { merge } from "@unboxing/object";
import { test } from "vitest";

test('test merge',()=>{
  console.log(merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 }))
})
