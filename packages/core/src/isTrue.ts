interface IsTrue {
  (val: true | 'true'): true
  <T extends boolean>(val: T): T
  (val: any): false
}

// Returns true if `val` is true or equal to string 'true'
export const isTrue = ((val: any) => val === true || val === 'true') as IsTrue
