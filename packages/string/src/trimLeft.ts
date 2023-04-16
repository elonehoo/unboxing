// Removes leading whitespace from `str`.
export function trimLift(str = '') {
  return str.replace(/^[\s\uFEFF\xA0]+/g, '')
}
