const regExp = /[\\^$.*+?()[\]{}|]/g

// Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
export function escapeRegExp(str = '') {
  return str.replace(regExp, '\\$&')
}
