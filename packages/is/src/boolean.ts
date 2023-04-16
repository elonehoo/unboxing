// Checks if `test` is boolean.
export function isBool(test: any): test is boolean {
  return typeof test === 'boolean' || test instanceof Boolean
}
