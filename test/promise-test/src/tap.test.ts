import { test } from "vitest";
import {promiseTap} from '@unboxing/promise'

test('test promise tap',()=>{
  var sayX = (x:any) => console.log('x is ' + x)
  Promise.resolve(5).then(promiseTap(sayX))
})
