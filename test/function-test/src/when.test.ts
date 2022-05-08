import { when } from "@unboxing/function";
import { test } from "vitest";

test('test when',()=>{
  var truncate = when(
    x => x.length > 10,
    x => x.slice(0, 10) + '...'
  )

  console.log(truncate('12345'))
  console.log(truncate('0123456789ABC'))
})
