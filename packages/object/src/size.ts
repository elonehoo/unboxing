import { objectKeys } from "./keys";

// Gets the size of `obj` by returning the number of own enumerable properties.
export const size = (obj:any) => objectKeys(obj).length
