/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 */
export function typeOf(x: any): string {
  if (x === null)
    return 'Null'

  if (x === undefined)
    return 'Undefined'

  return Object.prototype.toString.call(x).slice(8, -1)
}
