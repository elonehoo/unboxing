import { test } from "vitest";
import {objectKeys} from '@unboxing/object'

test('test keys',()=>{
  console.log(objectKeys({a: 1, b: 2, c: 3}))
})
