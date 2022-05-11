import { filterObject, propEq } from "@unboxing/object";

import { test } from "vitest";

test('test prop eq',()=>{
  var abby = {name: 'Abby', age: 7, hair: 'blond'};
  var fred = {name: 'Fred', age: 12, hair: 'brown'};
  var rusty = {name: 'Rusty', age: 10, hair: 'brown'};
  var alois = {name: 'Alois', age: 15, disposition: 'surly'};
  var kids = [abby, fred, rusty, alois];
  var hasBrownHair = propEq('hair', 'brown')
  console.log(filterObject(hasBrownHair, kids))
})
