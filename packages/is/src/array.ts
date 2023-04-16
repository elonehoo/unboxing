// Checks if `test` is array.
export function isArray(test: any): test is any[] {
  return !!test && Array.isArray(test)
}
