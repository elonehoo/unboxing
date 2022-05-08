import { test } from "vitest";
import {tryCatch} from '@unboxing/function'

test('test try cache',()=>{
  console.log(tryCatch(x => x.length, () => 0)([ 1, 2, 3 ]))
  console.log(tryCatch(x => x.length, () => 0)( undefined ))
})
