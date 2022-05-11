export function alaways<T>(value: T): Function {
  return () => value
}
