import { curryN } from './curryN'

interface UpdatePropertyValue {
  <T, R>(propertyName: string, propertyValue: T, obj: R): R & { propertyName: T }
  <T, R>(propertyName: string, propertyValue: T): (obj: R) => R & { propertyName: T }
  (propertyName: string): {
      <T, R>(propertyValue: T, obj: R): R & { propertyName: T }
      <T>(propertyValue): <R>(obj: R) => R & { propertyName: R }
  }
}

// A function to change value by property name in object.
export const updatePropertyValue = curryN(2, <T, R>(propertyName: string, propertyValue: T, obj: R) => {
  const descriptor = Object.getOwnPropertyDescriptor(obj, propertyName)

  descriptor.value = propertyValue
  Object.defineProperty(obj, propertyName, descriptor)

  return obj
}) as UpdatePropertyValue
