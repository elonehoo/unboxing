export const curryN = ((arity: number, fn: Function) =>
  function curried(...args:any[]) {
    if (args.length >= arity) {
        return fn.apply(this, args);
    }

    return function(...newArgs:any[]) {
        return curried.apply(this, args.concat(newArgs));
    };
})
