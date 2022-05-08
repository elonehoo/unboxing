import {isObject} from './object'
import {isFunction} from './function'

// Checks if `test` is Promise.
export const isPromise = (test:any): test is Promise<any> => (isObject(test) || isFunction(test)) && isFunction(test.then)


