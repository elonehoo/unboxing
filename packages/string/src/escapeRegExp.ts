const regExp = /[\\^$.*+?()[\]{}|]/g

// Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
export const escapeRegExp = (str = '') => str.replace(regExp, '\\$&')
