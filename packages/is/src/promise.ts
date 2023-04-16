import { isObject } from './object'
import { isFunction } from './function'

// Checks if `test` is Promise.
export function isPromise(test: any): test is Promise<any> {
  return (isObject(test) || isFunction(test)) && isFunction(test.then)
}
