import { indexBy } from "@unboxing/array";
import { test } from "vitest";

test('test index by',()=>{
  var list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}]
  console.log(indexBy(x => x.id, list))
})
