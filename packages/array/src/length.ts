interface Length {
  <T>(list: T): T extends ArrayLike<any> ? number : void
}

/**
 * Returns the number of elements in the array by returning `arr.length`.
 */
export const lengthArray = ((arr?: ArrayLike<any>) => arr && arr.length) as Length
