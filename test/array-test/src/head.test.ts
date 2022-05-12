import { head } from "@unboxing/array";
import { test } from "vitest";

test('test head',()=>{
  console.log(head(['fi', 'fo', 'fum']))
  console.log(head([]))
})
