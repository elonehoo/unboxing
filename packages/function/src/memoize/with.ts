import { curryN } from '../curryN'
import type { createCache } from './createCache'

type CacheFunc = () => ReturnType<typeof createCache>
type Hasher = (args: any|any[]) => string

interface MemoizeWith {
  <T extends Function>(getCache: CacheFunc, hasher: Hasher, fn: T): T
  (getCache: CacheFunc, hasher: Hasher): <T extends Function>(fn: T) => T
  (getCache: CacheFunc): {
      <T extends Function>(hasher: Hasher, fn: T): T
      (hasher: Hasher): <T extends Function>(fn: T) => T
  }
}

export const memoizeWith = curryN(3, (getCache: CacheFunc, hasher: Hasher, fn: Function) => {
  const cache = getCache()

  return (args: any|any[]) => {
    const cacheKey = hasher(args)

    if (cache.has(cacheKey))
      return cache.get(cacheKey)

    const fnCallResult = fn(args)

    cache.set(cacheKey, fnCallResult)

    return fnCallResult
  }
}) as MemoizeWith
