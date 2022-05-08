import {test} from 'vitest'
import {cond} from '@unboxing/function'

test('test cond',()=>{
  var fn = cond([
    [isEqual(0),   always('water freezes at 0°C')],
    [isEqual(100), always('water boils at 100°C')],
    [T,           temp => 'nothing special happens at ' + temp + '°C']
  ]);

  console.log(fn(0))
  console.log(fn(50))
  console.log(fn(100))
})

function isEqual(value:number){
  return (x:number)=>x===value
}
