import { either } from "@unboxing/function"
import { test } from "vitest"

test('test either',()=>{
  var gt10 = x => x > 10
  var even = x => x % 2 === 0
  var f = either(gt10, even)
  console.log(f(101))
  console.log(f(8))
  console.log(f(3))
})

