import { pathSetBy } from "@unboxing/object"
import { test } from "vitest"

test('test path set by',()=>{
  console.log(pathSetBy(['a', 'b'], (x:any) => x+1, {a: { b:1 }}))
})
