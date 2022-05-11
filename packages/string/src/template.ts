import { curryN } from "@unboxing/function";

interface Template {
  (replacements: Record<string, string>, str?: string): string;
  (replacements: Record<string, string>): (str?: string) => string;
}

// Replaces string keywords with provided values
export const template = curryN(2, (replacements:any = {}, str: string = '') =>
    str.replace(/%\{.+?\}/g, (match) => {
        const replacementKey = match.replace(/\W/g, '');

        return replacements[replacementKey];
    })
) as Template
