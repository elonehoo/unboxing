import { isObject } from './object'

const hasOwnProperty = Object.prototype.hasOwnProperty

export function isShallowEqual(test1: any, test2: any): boolean {
  if (test1 === test2)
    return true

  if (!isObject(test1) || !isObject(test2))
    return false

  const keys = Object.keys(test1)

  if (keys.length !== Object.keys(test2).length)
    return false

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]

    if (!hasOwnProperty.call(test2, key) || test1[key] !== test2[key])
      return false
  }

  return true
}
