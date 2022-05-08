import {Func} from '@unboxing/core'

// Checks if `test` is function.
export const isFunction = (test:any): test is Func => typeof test === 'function'
