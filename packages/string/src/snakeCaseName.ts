import { words } from "./words";

// Returns the snake case version of a string.
export function snakeCaseName(str: string): string {
  return words(str)
      .join('_')
      .toLowerCase();
}
