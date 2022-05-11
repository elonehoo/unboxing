import { curryN } from './curryN'

interface Flip {
  <T, U, R>(fn: (arg0: T, arg1: U, args: any|any[]) => R): (arg1: U, arg0: T, args: any|any[]) => R
}

// Returns a new function much like the supplied one, except that the first two arguments' order is reversed.
export const flip = (<T, U, R>(fn: (a: T, b: U) => R) =>
  curryN(2, function (a: U, b: T) {
    const args = Array.prototype.slice.call(arguments)
    args[0] = b
    args[1] = a

    return fn.apply(this, args)
  })
) as Flip
