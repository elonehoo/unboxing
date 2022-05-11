import { upperFirst } from "@unboxing/string";
import { test } from "vitest";

test('test upper first',()=>{
  console.log(upperFirst('foo'))
  console.log(upperFirst('über'))
  console.log(upperFirst('Foo'))
})
