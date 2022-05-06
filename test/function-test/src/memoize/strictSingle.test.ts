import { strictSingle } from "@unboxing/function"
import { test } from "vitest"

test('test strict single',()=>{
  const addFlag = obj => ({...obj, flag: true })
  const memoize = strictSingle(addFlag)
  const test = {test: 1}
  console.log(memoize(test))
  console.log(memoize({test: 1}))
  console.log(memoize(test))
})
