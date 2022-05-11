import { kebabCaseName } from "@unboxing/string";
import { test } from "vitest";

test('test kebab case name',()=>{
  console.log(kebabCaseName('Foo Bar'))
  console.log(kebabCaseName('fooBar'))
  console.log(kebabCaseName('foo_bar'))
  console.log(kebabCaseName('FOO_BAR'))
  console.log(kebabCaseName('Foo Bär'))
})
