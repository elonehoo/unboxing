const unescapeRegExp = /&(?:amp|lt|gt|quot|#39);/g;

const htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
};
const unescapeBy = (char:any) => htmlUnescapes[char];

export const unescape = (str = '') => str.replace(unescapeRegExp, unescapeBy);
