import { test } from "vitest";
import {eqProps} from '@unboxing/object'

test('test eq props',()=>{
  var o1 = { a: 1, b: 2, c: 3, d: 4 }
  var o2 = { a: 10, b: 20, c: 3, d: 40 }
  console.log(eqProps('a', o1, o2))
  console.log(eqProps('c', o1, o2))
})
