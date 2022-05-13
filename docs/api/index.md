# API Reference

:::tip Info
Here we can clearly understand the usage of each API.
:::

## Core



  ### Assign

   Create a new object/array with the own properties of the first entry merged with the own properties of the others objects. If a key exists in several objects, the value from the last object will be used.

   *Note:* if first argument is array then result of function is array, otherwise it is an object.

   **import:**

   ```typescript
   import { assign } from '@unboxing/core'
   // or
   import { assign } from '@unboxing/unboxing'
   ```

   **Params:**

   | name | type | Attribute | description |
   | --- | --- | --- | --- |
   | sources | any / any[ ] | | |

   **Return:** *

   **Example:**
   ```typescript
   assign({ a: 1 }, { b: 2 })
   assign([1, 2, 3], [4, 5])
   ```
  ### defaultTo

   Autocurry for 2 arguments

   Returns the second argument if it is not `null`, `undefined` or `NaN` otherwise the first argument is returned.

   **import:**

   ```typescript
   import { defaultTo } from '@unboxing/core'
   // or
   import { defaultTo } from '@unboxing/unboxing'
   ```

   **Params:**
   | name | type | Attribute | description |
   | --- | --- | --- | --- |
   | dflt | any | | The default value. |
   | x | any | | The value to return if it is not null or undefined |

   **Resurn:** `*` The the second value or the default value

   **Example:**
   ```typescript
   var defaultTo42 = defaultTo(42)
   defaultTo42(null) //=> 42
   defaultTo42(undefined) //=> 42
   defaultTo42('Example') //=> Example
   defaultTo42('string') //=> string
   ```

  ### isTrue
   Returns true if `val` is true or equal to string 'true'

   **import:**

   ```typescript
   import { isTrue } from '@unboxing/core'
   // or
   import { isTrue } from '@unboxing/unboxing'
   ```

   **Params:**
   | name | type | Attribute | description |
   | --- | --- | --- | --- |
   | val | any | |  |

   **Resurn:** boolean

   **Example:**
   ```typescript
   isTrue(true) // => true
   isTrue('true') // => true
   isTrue([true]) // => false
   isTrue('false') // => false
   ```

  ### negate

   Negates its argument.

   **import:**

   ```typescript
   import { negate } from '@unboxing/core'
   // or
   import { negate } from '@unboxing/unboxing'
   ```
   **Params:**
   | name | type | Attribute | description |
   | --- | --- | --- | --- |
   | value | number | |  |

   **Return:** number

   **Example:**

   ```typescript
   negate(42) // => -42
   ```

