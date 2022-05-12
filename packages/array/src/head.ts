interface Head {
  <T>(list: ArrayLike<T>): T | undefined;
  (list: string): string;
}

// Returns the first element of the given array.
export const head = (<T>(arr: ArrayLike<T> | string) => arr && arr[0]) as Head
