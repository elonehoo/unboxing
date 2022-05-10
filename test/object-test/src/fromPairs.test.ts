import { test } from "vitest";
import { fromPairs } from '@unboxing/object'

test('test from pairs',()=>{
  console.log(fromPairs([['a', 1], ['b', 2], ['c', 3]]))
})
