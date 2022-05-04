import { test } from "vitest"
import { curry } from "@unboxing/function"

test('test curry',()=>{
    var addFourNumbers = (a, b, c, d) => a + b + c + d;

     var curriedAddFourNumbers = curry(addFourNumbers);
     var f = curriedAddFourNumbers(1, 2);
     var g = f(3);
     console.log(g(4))
})
