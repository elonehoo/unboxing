// Checks if `test` is nil (null or undefined).
export function isNil(test: any): test is void {
  return test == null
}
