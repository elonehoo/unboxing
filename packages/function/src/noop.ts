import type { Func } from '@unboxing/core'

// This method doing nothing and returns `undefined`.
export const noop = (() => {}) as Func<void>
