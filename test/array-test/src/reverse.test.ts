import { reverseArray } from "@unboxing/array";
import { test } from "vitest";

test('test reverse array',()=>{
  console.log(reverseArray([1, 2, 3]))
  console.log(reverseArray([1, 2]))
  console.log(reverseArray([]))
  console.log(reverseArray('abc'))
  console.log(reverseArray('ab'))
  console.log(reverseArray('a'))
  console.log(reverseArray(''))
})
