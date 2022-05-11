import { curryN } from '@unboxing/function'
import { isString } from '@unboxing/is'

interface Repeat {
  (n: number, a: string): string
  (n: number): (a: string) => string
}

// Returns a string containing a repeated identical value.
export const repeat = curryN(2, (n = 0, value: string) => {
  if (!isString(value))
    return ''

  let result = ''

  for (let i = 0; i < n; i++)
    result += value

  return result
}) as Repeat
