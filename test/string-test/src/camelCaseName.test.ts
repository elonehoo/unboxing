import { camelCaseName } from "@unboxing/string";
import { test } from "vitest";

test('test camel case name',()=>{
  console.log(camelCaseName('Foo Bar'))
  console.log(camelCaseName('foo-bar'))
  console.log(camelCaseName('foo_bar'))
  console.log(camelCaseName('FOO_BAR'))
  console.log(camelCaseName('fooBar'))
  console.log(camelCaseName('Foo Bär'))
})
