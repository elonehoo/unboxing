const escapeRegExp = /[&<>"']/g;

const htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

const escapeBy = (char:any) => htmlEscapes[char];

export const escape = (str = '') => str.replace(escapeRegExp, escapeBy)
