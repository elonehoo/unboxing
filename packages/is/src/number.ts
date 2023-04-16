// Checks if `test` is number.
export function isNum(test: any): test is number {
  return typeof test === 'number' || test instanceof Number
}
