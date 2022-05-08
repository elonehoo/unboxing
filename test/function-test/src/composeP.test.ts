import { test } from "vitest"
import {composeP} from '@unboxing/function'

test('test composeP',()=>{
  var res = x => Promise.resolve(x)

  var f = composeP(x => res(-x), (x, y) => res(Math.pow(x, y)))
  f(3, 4).then(console.log)
})
