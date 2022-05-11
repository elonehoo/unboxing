// Checks if `test` is number.
export const isNum = (test: any): test is number => typeof test === 'number' || test instanceof Number
