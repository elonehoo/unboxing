interface Last {
  <T>(list: ArrayLike<T>): T | undefined
  (list: string): string
}

/**
 * Returns the last element of the given array.
 */
export const last = (<T>(arr: ArrayLike<T> | string) => arr && arr[arr.length - 1]) as Last
