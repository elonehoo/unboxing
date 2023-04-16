const escapeRegExp = /[&<>"']/g

const htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#39;',
}

function escapeBy(char: any) {
  return htmlEscapes[char]
}

export function escape(str = '') {
  return str.replace(escapeRegExp, escapeBy)
}
