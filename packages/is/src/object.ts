// Checks if `test` is object.
export const isObject = (test: any): test is Record<any, any> => test !== null && typeof test === 'object'
