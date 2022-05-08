// Checks if `test` is string.
export const isString = (test:any): test is string => typeof test === 'string' || test instanceof String
