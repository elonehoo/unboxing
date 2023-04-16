/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 */
export function range(a: number, b?: number, step?: number) {
  if (typeof b !== 'number') {
    b = a
    a = 0
  }

  if (typeof step !== 'number')
    step = a < b ? 1 : -1

  const length = Math.max(Math.ceil((b - a) / (step || 1)), 0)
  const result = new Array(length)
  let x = a

  for (let i = 0; i < length; i++) {
    result[i] = x
    x += step
  }

  return result
}
