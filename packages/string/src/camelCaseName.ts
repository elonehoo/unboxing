import { upperFirst } from "./upperFirst";
import { words } from "./words";

// Converts string to camel case.
export function camelCaseName(str: string): string {
  return words(str)
      .map((word, index) => {
          if (index === 0) {
              return word.toLowerCase();
          }

          return upperFirst(word.toLowerCase());
      })
      .join('');
}
