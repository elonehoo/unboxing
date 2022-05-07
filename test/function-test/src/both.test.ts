import { both } from "@unboxing/function"
import {test} from 'vitest'

test('test both',()=>{
  var gt10 = (x:number) => x > 10
  var even = (x:number) => x % 2 === 0
  var f = both(gt10, even)
  console.log(f(100))
  console.log(f(101))
})
