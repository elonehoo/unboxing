interface Identity {
  <T>(x: T): T;
}

// A function that does nothing but return the parameter supplied to it. Good as a default or placeholder function.
export const identity = ((x) => x) as Identity
