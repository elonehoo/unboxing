import {isObject} from '@unboxing/is'

interface Keys {
  <T extends Record<any, any>>(x: T): Array<keyof T & string>;
  <T>(x: T): string[];
}

/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 */
export const keys = ((obj:any) => (isObject(obj) ? Object.keys(obj) : [])) as Keys
