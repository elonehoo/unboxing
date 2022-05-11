import { has } from '@unboxing/object'
import { isArray } from './array'
import { isString } from './string'

// Checks if `test` is arrayLike (has `length` and index properties).
export const isArrayLike = (test: any): test is ArrayLike<any> => {
  switch (true) {
    case isArray(test):
      return true
    case !test:
    case typeof test !== 'object':
    case isString(test):
      return false
    case test.nodeType === 1:
      return !!test.length
    case test.length === 0:
      return true
    case test.length > 0:
      return has('0', test) && has(String(test.length - 1), test)
  }

  return false
}
