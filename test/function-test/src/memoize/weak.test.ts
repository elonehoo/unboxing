import { weak } from "@unboxing/function";
import { test } from "vitest";

test('test weak',()=>{
  const addFlag = obj => ({...obj, flag: true })
  const memoize = weak(addFlag)
  const test = {test: 1}
  console.log(memoize(test))
  console.log(memoize({test:1}))
  console.log(memoize(test))
})
