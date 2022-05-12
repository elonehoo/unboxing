import { sortArrayBy } from "@unboxing/array";
import { test } from "vitest";

test('test sort array by',()=>{
  var sortByFirstItem = sortArrayBy(x => x[0])
  var pairs = [[-1, 1], [-2, 2], [-3, 3]]
  console.log(sortByFirstItem(pairs))

})
