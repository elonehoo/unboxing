# API Reference

:::tip Info
Here we can clearly understand the usage of each API.
:::

## Core

  ### Assign

   Create a new object/array with the own properties of the first entry merged with the own properties of the others objects. If a key exists in several objects, the value from the last object will be used.

   **Note:** if first argument is array then result of function is array, otherwise it is an object.

   **import:**

   ```typescript
   import { assign } from '@unboxing/core'
   // or
   import { assign } from '@unboxing/unboxing'
   ```

  **params:**

   | name | type | Attribute | description |
   | --- | --- | --- | --- |
   | sources | any / any[ ] | | |

  **Return:** *

  **Example:**
   ```typescript
   assign({ a: 1 }, { b: 2 })
   assign([1, 2, 3], [4, 5])
   ```

