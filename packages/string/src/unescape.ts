const unescapeRegExp = /&(?:amp|lt|gt|quot|#39);/g

const htmlUnescapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': '\'',
}
function unescapeBy(char: any) {
  return htmlUnescapes[char]
}

export function unescape(str = '') {
  return str.replace(unescapeRegExp, unescapeBy)
}
