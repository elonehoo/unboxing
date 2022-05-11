import { isNum } from './number'

// Checks if `test` is finite.
export const isFinite = (test: any): test is number => isNum(test)
