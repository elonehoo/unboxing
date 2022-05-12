import { tailArray } from "@unboxing/array";
import { test } from "vitest";

test('test tail array',()=>{
  console.log(tailArray(['fi', 'fo', 'fum']))
  console.log(tailArray([]))
})
