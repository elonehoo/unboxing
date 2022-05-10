import { test } from "vitest";
import {findKey} from '@unboxing/object'

test('test find key',()=>{
  console.log(findKey(x => x > 3, { a: 2, b: 1 }))
  console.log(findKey(x => x > 3, { a: 4, b: 5 }))
})
