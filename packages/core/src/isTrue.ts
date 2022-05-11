// Returns true if `val` is true or equal to string 'true'
export function isTrue(val: boolean|string): boolean {
  return val === true || val === 'true'
}
