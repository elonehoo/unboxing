import { dropArrayLast } from "@unboxing/array";
import { test } from "vitest";

test('test drop array last',()=>{
  console.log(dropArrayLast(1, ['foo', 'bar', 'baz']))
})
