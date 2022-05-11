import { objectKeys } from './keys'

interface Values {
  <O>(obj: O): Array<O[keyof O]>
}

export const values = ((obj) => {
  const keys = objectKeys(obj)
  const len = keys.length
  const values = new Array(len)

  for (let i = 0; i < len; i++)
    values[i] = obj[keys[i]]

  return values
}) as Values
