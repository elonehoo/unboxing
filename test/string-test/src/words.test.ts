import { test } from 'vitest'
import {words} from '@unboxing/string'

test ('test words',()=>{
  console.log(words('fooBarZoo'))
  console.log(words('foo_bar_zoo'))
  console.log(words('foo-bar-zoo'))
  console.log(words('foo bar zoo'))
  console.log(words('fooBär'))
})
