import { curryN } from '@unboxing/function'
import type { Pattern } from '@unboxing/core'

interface Split {
  (delim: Pattern, str: string): string[]
  (delim: Pattern): (str: string) => string[]
}

// Splits a string into an array of strings based on the given separator.
export const split = curryN(2, (delim: Pattern = '', str = '') => str.split(delim)) as Split
