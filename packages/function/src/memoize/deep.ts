import { memoizeWith } from "./with"
import { createCache } from "./createCache"

// Memoize function with multiply arguments of any type. Use it when you need deep equality for cache lookup.
export const deep = memoizeWith(createCache, (args:any|any[]) => JSON.stringify(args))
