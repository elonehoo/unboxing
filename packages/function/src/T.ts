import type { Func } from '@unboxing/core'

// A function that always returns `true`. Any passed in parameters are ignored.
export const t = (() => true) as Func<true>
