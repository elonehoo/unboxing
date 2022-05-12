/**
 * Adds together all the elements of a list.
 */
export const sumArray = (arr: ArrayLike<number> = []) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  }

  return sum;
};
