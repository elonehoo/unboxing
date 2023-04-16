import { curryN } from '@unboxing/function'

interface DefaultTo {
  <T>(a: T, b: null | undefined): T
  <T, U>(a: T, b: U): U
  <T>(a: T): {
    (b: null | undefined): T
      <U>(b: U): U
  }
}

/**
 * Returns the second argument if it is not `null`, `undefined` or `NaN`
 * otherwise the first argument is returned.
 */
export const defaultTo = curryN(2, (dflt: any, x: any) => {
  if (x == null || x !== x)

    return dflt

  return x
}) as DefaultTo
