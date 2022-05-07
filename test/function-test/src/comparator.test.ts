import { comparator } from "@unboxing/function";
import { test } from "vitest";

test('test comparator',()=>{
  var byAge = comparator((a, b) => a.age < b.age)
  var people = [
    { name: 'Alice', age: 27 },
    { name: 'Bob', age: 33 },
  ]

  console.log(byAge(people[0], people[1]))
})
