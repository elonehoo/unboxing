import { words } from './words'

// Converts string to kebab case.
export function kebabCaseName(str: string): string {
  return words(str)
    .map(word => word.toLowerCase())
    .join('-')
}
