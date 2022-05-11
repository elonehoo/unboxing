import { eachString } from "@unboxing/array";
import { test } from "vitest";

test('test each string',()=>{
  var printXPlusFive = (x:number) => console.log(x + 5)
  console.log(eachString(printXPlusFive, [1, 2, 3]))
})
