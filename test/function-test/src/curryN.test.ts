import { test } from "vitest"
import {curryN} from '@unboxing/function'

test('test curryN',()=>{
  var sumArgs = (...args:number[]) => sum(...args);

  var curriedAddFourNumbers = curryN(4, sumArgs);
  var f = curriedAddFourNumbers(1, 2);
  var g = f(3);
  console.log(g(4))
})

function sum(...args:number[]){
  let result = 0
  for(let i = 0; i < args.length; i++){
    result += args[i]
  }
  return result
}
