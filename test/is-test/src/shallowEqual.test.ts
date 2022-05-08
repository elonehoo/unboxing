import { test } from "vitest";
import {isShallowEqual} from '@unboxing/is'

test('test is shallow equal',()=>{
  console.log(isShallowEqual(1, 1))
  console.log(isShallowEqual(1, '1'))
  console.log(isShallowEqual([1, 2, 3], [1, 2, 3]))
  console.log(isShallowEqual({ a: { b: 1 }}, { a: { b: 1 }}))
})
