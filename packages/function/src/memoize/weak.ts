import { identity } from '../identity'
import { memoizeWith } from './with'

// Simple memoization using WeakMap.
export const weak = memoizeWith(() => new WeakMap(), identity)
