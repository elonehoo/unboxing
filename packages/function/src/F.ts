import type { Func } from '@unboxing/core'

// A function that always returns `false`. Any passed in parameters are ignored.
export const f = (() => false) as Func<false>
