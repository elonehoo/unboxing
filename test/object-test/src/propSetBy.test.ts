import { propSetBy } from "@unboxing/object";
import { test } from "vitest";

test('test prop set by',()=>{
  console.log(propSetBy('a', x => x+1, {a: 1}))
})
