import { test } from "vitest";
import {memoizeOnce} from '@unboxing/function'

test('test one',()=>{
  const addFlag = obj => ({...obj, flag: true })
  const memoize = memoizeOnce(addFlag)
  console.log(memoize(1))
  console.log(memoize(1))
  console.log(memoize(1,2))
  console.log(memoize(1))
})
