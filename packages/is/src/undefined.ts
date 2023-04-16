// Checks if `test` is `undefined`.
export function isUndefined(test: any): test is undefined {
  return typeof test === 'undefined'
}
