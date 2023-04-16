// Returns a curried equivalent of the provided function, with the specified arity.
export function curryN(arity: number, fn: Function) {
  return function curried(...args: any[]) {
    if (args.length >= arity)
      return fn.apply(this, args)

    return function (...newArgs: any[]) {
      return curried.apply(this, args.concat(newArgs))
    }
  }
}
