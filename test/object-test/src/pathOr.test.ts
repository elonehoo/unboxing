import { pathOr } from "@unboxing/object";
import { test } from "vitest";

test('test path or',()=>{
  console.log(pathOr(['a', 'b'],'N/A', {a: {b: 2}}))
  console.log(pathOr(['a', 'b'], 'N/A', {c: {b: 2}}))
})
