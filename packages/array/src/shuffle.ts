/**
 * Creates an array of shuffled values
 */
export const shuffle = <T>(arr: ArrayLike<T> = []) => {
  const len = arr.length;
  const result: T[] = new Array(len);

  for (let i = 0; i < len; i++) {
      const rand = Math.floor(Math.random() * (i + 1));

      if (rand !== i) {
          result[i] = result[rand];
      }

      result[rand] = arr[i];
  }

  return result;
}
