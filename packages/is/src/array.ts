// Checks if `test` is array.
export const isArray = (test:any): test is any[] => !!test && Array.isArray(test);
