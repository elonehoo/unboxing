import { pathApply } from "@unboxing/object";
import { test } from "vitest";

test('test path apply',()=>{
  console.log(pathApply(['a', 'b'], (x:any) => 'is ' + x, {a: {b: 2}}))
  console.log(pathApply(['a', 'b'], (x:any) => x > 0, {a: {b: 2}}))
})
