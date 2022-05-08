//Returns `true` if its arguments are equivalent is same value zero terms, `false` otherwise.
export const isStrictEqual = (test1:any, test2:any): boolean => {
  // SameValue algorithm
  if (test1 === test2) {
      // Steps 6.b-6.e: +0 != -0
      return test1 !== 0 || 1 / test1 === 1 / test2;
  } else {
      // Step 6.a: NaN == NaN
      return test1 !== test1 && test2 !== test2;
  }
}
