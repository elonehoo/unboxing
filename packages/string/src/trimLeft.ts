// Removes leading whitespace from `str`.
export const trimLift = (str = '') => str.replace(/^[\s\uFEFF\xA0]+/g, '')
