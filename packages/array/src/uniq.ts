interface Uniq {
  <T>(list: ArrayLike<T>): T[];
}

/**
 * Returns unique items in array
 */
export const unique = (<T>(arr: ArrayLike<T> = []) => {
  const result: T[] = [];

  for (let i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
          result.push(arr[i]);
      }
  }

  return result;
}) as Uniq
