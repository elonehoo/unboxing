import { equal } from '@unboxing/is'

export function memoizeOnce<T extends Function>(fn: T, isEqual: (a, b) => boolean = equal): T {
  let lastArgs = []
  let lastResult
  let alreadyCalled = false

  const isNewArgEqualToLast = (newArg, index) => isEqual(newArg, lastArgs[index])

  return ((...newArgs) => {
    if (alreadyCalled && newArgs.length === lastArgs.length && newArgs.every(isNewArgEqualToLast))
      return lastResult

    lastResult = fn(...newArgs)
    alreadyCalled = true
    lastArgs = newArgs
    return lastResult
  }) as any
}
