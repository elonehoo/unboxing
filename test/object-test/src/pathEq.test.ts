import { pathEq,filterObject } from "@unboxing/object";
import { test } from "vitest";

test('test path eq',()=>{
  var user1 = { address: { zipCode: 90210 } };
     var user2 = { address: { zipCode: 55555 } };
     var user3 = { name: 'Bob' };
     var users = [ user1, user2, user3 ];
     var isFamous = pathEq(['address', 'zipCode'], 90210);
     console.log(filterObject(isFamous, users))
})
