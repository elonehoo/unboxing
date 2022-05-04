import { test } from 'vitest'

import {root,ArrayProto,ObjProto} from "@unboxing/core"

test('test root type',()=>{
  console.log(typeof root)
})

test('test Array Proto',()=>{
  console.log(ArrayProto.push)
})

test('test Object Proto',()=>{
  console.log(ObjProto)
})
