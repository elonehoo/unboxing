// Checks if `test` is object.
export function isObject(test: any): test is Record<any, any> {
  return test !== null && typeof test === 'object'
}
