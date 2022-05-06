import { identity } from "../identity"
import { memoizeWith } from "./with"

// Memoize functions with single argument of non-primitive argument.
export const strictSingle = memoizeWith(() => new Map(), identity)
