// Returns the capitalized version of a string.
export function capitalize(str = '') {
  return `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`
}
