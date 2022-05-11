import { curryN } from '@unboxing/function'

interface Test {
  (regexp: RegExp, str: string): boolean
  (regexp: RegExp): (str: string) => boolean
}

// Determines whether a given string matches a given regular expression.
export const stringTest = curryN(2, (pattern = /()/, str = '') => pattern.test(str)) as Test
