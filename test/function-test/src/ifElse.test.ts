import { test } from "vitest";
import {ifelse} from '@unboxing/function'

test('test ifelse',()=>{
  const prop = ifelse(
    x => x.a,
    x => x.b,
    x => x.c
  );
  console.log(prop({ a: false, c: 2 }))
  console.log(prop({ a: true, b: 1, c: 2 }))
})
