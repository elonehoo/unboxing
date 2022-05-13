import { defaultTo } from "@unboxing/core";
import { test } from "vitest";

test('test default to',()=>{
  var defaultTo42 = defaultTo(42)
  console.log(defaultTo42(null)) //=> 42
  console.log(defaultTo42(undefined)) //=> 42
  console.log(defaultTo42('Example')) //=> Example
  console.log(defaultTo42('string')) //=> string
})
