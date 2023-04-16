// Checks if `test` is string.
export function isString(test: any): test is string {
  return typeof test === 'string' || test instanceof String
}
