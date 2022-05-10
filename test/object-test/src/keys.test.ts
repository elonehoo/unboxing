import { test } from "vitest";
import {keys} from '@unboxing/object'

test('test keys',()=>{
  console.log(keys({a: 1, b: 2, c: 3}))
})
