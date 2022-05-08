import { test } from "vitest";
import {isPromise} from '@unboxing/is'
test('test is promise',()=>{
  console.log(isPromise({}))
  console.log(isPromise(Promise.resolve()))
})
