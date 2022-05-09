import { test } from "vitest";
import {resolveWith} from '@unboxing/promise'

test('test resolve with',()=>{
  resolveWith(toLowerCase, 'OK').then( res => console.info(res) )
})

function toLowerCase(info:any):string{
  return info.toLowerCase()
}
