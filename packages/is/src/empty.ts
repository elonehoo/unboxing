import { isNil } from './nil'
import { isArray } from './array'
import { isString } from './string'
import { isObject } from './object'

// Checks if `test` is empty.
export const isEmpty = (test: any): boolean => {
  switch (true) {
    case isNil(test):
      return true
    case isString(test):
      return test === ''
    case isArray(test):
      return test.length === 0
    case isObject(test):
      return Object.keys(test).length === 0
  }

  return false
}
