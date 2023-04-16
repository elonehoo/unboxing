import type { Func } from '@unboxing/core'

// Checks if `test` is function.
export function isFunction(test: any): test is Func {
  return typeof test === 'function'
}
