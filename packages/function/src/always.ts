export function always<T>(value: T): Function {
  return () => value
}
