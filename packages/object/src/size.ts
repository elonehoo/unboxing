import { objectKeys } from './keys'

// Gets the size of `obj` by returning the number of own enumerable properties.
export function size(obj: any) {
  return objectKeys(obj).length
}
