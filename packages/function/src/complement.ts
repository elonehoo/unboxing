interface Complement {
  <F extends (args:any|any[]) => any>(pred: F): (...args: Parameters<F>) => boolean;
}

//Takes a function `f` and returns a function `g` such that if called with the same arguments when `f` returns a "truthy" value, `g` returns `false` and when `f` returns a "falsy" value
export const complement = (<F extends Function>(fn: F) => (...args) => !fn(...args)) as Complement;
