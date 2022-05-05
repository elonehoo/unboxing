import { test } from "vitest"
import {memoizeWith} from "@unboxing/function"

test('test memoize with',()=>{
    const createCache = () => new Map();
     const hasher = (...args) => JSON.stringify(args);
     const memoize = memoizeWith(createCache, hasher);

     const add = (a:number,b:number) => a + b;
     const memoizeAdd = memoize(add);
     console.log(memoizeAdd(1,3))
     console.log(memoizeAdd(1,4))
     console.log(memoizeAdd(1,3))
})
