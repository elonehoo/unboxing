import { isNum } from './number'

// Checks if `test` is finite.
export function isFinite(test: any): test is number {
  return isNum(test)
}
