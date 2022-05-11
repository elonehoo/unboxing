import { snakeCaseName } from "@unboxing/string";
import { test } from "vitest";

test('test snake case name',()=>{
  console.log(snakeCaseName('Foo Bar'))
  console.log(snakeCaseName('fooBar'))
  console.log(snakeCaseName('foo-bar'))
  console.log(snakeCaseName('FOO-BAR'))
  console.log(snakeCaseName('Foo Bär'))
})
