import { curryN } from '@unboxing/function'

interface EndsWith {
  (postfix: string, str: string): boolean
  (postfix: string): (str: string) => boolean
}

export const endsWith = curryN(
  2,
  (postfix = '', str = '') => str.slice(-postfix.length) === postfix,
) as EndsWith
