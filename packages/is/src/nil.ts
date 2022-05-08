// Checks if `test` is nil (null or undefined).
export const isNil = (test:any): test is void => test == null
