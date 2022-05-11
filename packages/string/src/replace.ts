import { curryN } from "@unboxing/function";
import { Pattern, CurriedFunction2 } from '@unboxing/core'

interface Replace {
  (pattern: Pattern, replacement: string, str: string): string;
  (pattern: Pattern, replacement: string): (str: string) => string;
  (pattern: Pattern): CurriedFunction2<string, string, string>;
}

// Replace a substring or regex match in a string with a replacement.
export default curryN(3, (pattern: Pattern = '', replacement = '', str = '') =>
    str.replace(pattern, replacement)
) as Replace
