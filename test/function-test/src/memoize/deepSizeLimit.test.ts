import { test } from "vitest"
import { deepSizeLimit } from "@unboxing/function"

test('test deep size limit',()=>{
  const addFlag = obj => ({...obj, flag: true })
  const memoize = deepSizeLimit(2, addFlag)
  console.log(memoize({test: 2}))
  console.log(memoize({test: 2}))
  console.log(memoize({test: 3}))
  console.log(memoize({test: 4}))
  console.log(memoize({test: 2}))

})
