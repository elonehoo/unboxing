// Checks if `test` is boolean.
export const isBool = (test:any): test is boolean => typeof test === 'boolean' || test instanceof Boolean
