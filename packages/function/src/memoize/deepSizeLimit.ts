import { curryN } from '../curryN'
import { memoizeWith } from './with'

interface DeepSizeLimit {
  <T extends Function>(maxSize: number, fn: T): T
  (maxSize: number): <T extends Function>(fn: T) => T
}

function createSizedCache(maxSize: number) {
  const cache = new Map()

  cache.set = (...args) => {
    // flush cache if size reached the limit
    if (cache.size >= maxSize)
      cache.clear()

    return Map.prototype.set.call(cache, ...args)
  }
  return cache
}

/**
 * Memoize function with multiply arguments of any type, but it
 * clears cache every time it reaches the limit. Use it when you need
 * deep equality for cache lookup and afraid of memory leak.
 */
export const deepSizeLimit = curryN(2, (maxSize: number, fn: Function) =>
  memoizeWith(() => createSizedCache(maxSize), (...args) => JSON.stringify(args), fn),
) as DeepSizeLimit
