# API Reference

:::tip Info
Here we can clearly understand the usage of each API.
:::

## Core

  ### Assign

   Create a new object/array with the own properties of the first entry merged with the own properties of the others objects. If a key exists in several objects, the value from the last object will be used.

   *Note:* if first argument is array then result of function is array, otherwise it is an object.

   **Import:**

   ```typescript
   import { assign } from '@unboxing/core'
   // or
   import { assign } from '@unboxing/unboxing'
   ```

   **Params:**

   | name | type | Attribute | description |
   | --- | --- | --- | --- |
   | sources | any / any[ ] | | |

   **Return:** `*`

   **Example:**
   ```typescript
   assign({ a: 1 }, { b: 2 })
   assign([1, 2, 3], [4, 5])
   ```
  ### defaultTo

   Autocurry for 2 arguments

   Returns the second argument if it is not `null`, `undefined` or `NaN` otherwise the first argument is returned.

   **Import:**

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

   **Import:**

   ```typescript
   import { isTrue } from '@unboxing/core'
   // or
   import { isTrue } from '@unboxing/unboxing'
   ```

   **Params:**
   | name | type | Attribute | description |
   | --- | --- | --- | --- |
   | val | any | |  |

   **Resurn:** `boolean`

   **Example:**
   ```typescript
   isTrue(true) // => true
   isTrue('true') // => true
   isTrue([true]) // => false
   isTrue('false') // => false
   ```

  ### negate

   Negates its argument.

   **Import:**

   ```typescript
   import { negate } from '@unboxing/core'
   // or
   import { negate } from '@unboxing/unboxing'
   ```
   **Params:**
   | name | type | Attribute | description |
   | --- | --- | --- | --- |
   | value | number | |  |

   **Return:** `number`

   **Example:**

   ```typescript
   negate(42) // => -42
   ```

  ### not

   A function that returns the `!` of its argument. It will return true when passed false-y value, and false when passed a truth-y one.

   **Import:**

   ```typescript
   import { not } from '@unboxing/core'
   // or
   import { not } from '@unboxing/unboxing'
   ```

   **Params:**

   | name | type | Attribute | description |
   | --- | --- | --- | --- |
   | val | any | | any value |

   **Return:** `boolean`

   **Example:**

   ```typescript
   not(true); //=> false
   not(false); //=> true
   not(0); //=> true
   not(1); //=> false
   ```

  ### typeOf
   Gives a single-word string description of the (native) type of a value, returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not attempt to distinguish user Object types any further, reporting them all as 'Object'.

   **Import:**

   ```typescript
   import { typeOf } from '@unboxing/core'
   // or
   import { typeOf } from '@unboxing/unboxing'
   ```

   **Params:**

   | name | type | Attribute | description |
   | --- | --- | --- | --- |
   | val | any | | any value |

   **Return:** `string`

   **Example:**

   ```typescript
   typeOf({}) // -> 'Object'
   typeOf(1) // -> 'Number'
   typeOf(false) // -> 'Boolean'
   typeOf('string') // -> 'String'
   typeOf(null) // -> 'Null'
   typeOf([]) // -> 'Array'
   typeOf(/[A-z]/) // -> 'RegExp'
   ```

  ### uniqueId

   Generates a unique ID.

   **Import:**

   ```typescript
   import { uniqueId } from '@unboxing/core'
   // or
   import { uniqueId } from '@unboxing/unboxing'
   ```

   **Return:** `number`

   **Example:**

   ```typescript
   uniqueId() // -> '1651658044131'
   ```

## array

  ### adjustArray

   Applies a function to the value at the given index of an array, returning a new copy of the array with the element at the given index replaced with the result of the function application.

   **Import:**

   ```typescript
   import { adjustArray } from '@unboxing/array'
   // or
   import { adjustArray } from '@unboxing/unboxing'
   ```

   **Params:**

   | name | type | Attribute | description |
   | --- | --- | --- | --- |
   | fn | Function | | The function to apply. |
   | idx | number | | The index. |
   | list | array | | An array whose value at the supplied index will be replaced. |

   **Return:** `array`, A copy of the supplied array with the element at index `idx` replaced with the value returned by applying `fn` to the existing element.

   **Example:**

   ```typescript
   adjustArray(add(10), 1, [1, 2, 3]) //=> [1, 12, 3]
   adjustArray(add(10))(1)([1, 2, 3]) //=> [1, 12, 3]
   ```

  ### arrayAll

   Returns `true` if all the elements of the array match the predicate, `false` otherwise.

   **Import:**

   ```typescript
   import { arrayAll } from '@unboxing/array'
   // or
   import { arrayAll } from '@unboxing/unboxing'
   ```

   **Params:**

   | name | type | Attribute | description |
   | --- | --- | --- | --- |
   | fn | Function | | The predicate function. |
   | arr | Array | | The array to consider. |

   **Return:** `boolean`

   **Example:**

   ```typescript
   var lessThan2 = x => x < 2;
   var lessThan3 = x => x < 3;
   arrayAll(lessThan2)([1, 2]); //=> false
   arrayAll(lessThan3)([1, 2]); //=> true
   ```
  ### anyArray
   Returns `true` if at least one of elements of the list match the predicate, `false` otherwise.

   **Import:**

   ```typescript
   import { arrayAll } from '@unboxing/array'
   // or
   import { arrayAll } from '@unboxing/unboxing'
   ```

   **Params:**

   | name | type | Attribute | description |
   | --- | --- | --- | --- |
   | fn | Function | | The predicate function. |
   | arr | Array | | The array to consider. |

   **Return:** `boolean`, `true` if the predicate is satisfied by at least one element, `false` otherwise.

   **Example:**

   ```typescript
   var lessThan0 = (x:number) => x < 0
   var lessThan2 = (x:number) => x < 2
   anyArray(lessThan0)([1, 2]) //=> false
   anyArray(lessThan2)([1, 2]) //=> true
   ```

  ### concat
   Returns the result of concatenating the given arrays or strings.

   **Import:**

   ```typescript
   import { concat } from '@unboxing/array'
   // or
   import { concat } from '@unboxing/unboxing'
   ```

   **Params:**

   | name | type | Attribute | description |
   | --- | --- | --- | --- |
   | a | 	array/string | | The first list |
   | b | 	array/string | | The second list |

   **Return:** `array`/`string`, A list consisting of the elements of `firstList` followed by the elements of `secondList`.

   **Example:**

   ```typescript
   concat('ABC', 'DEF'); // 'ABCDEF'
   concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
   concat([], []); //=> []
   ```

  ### difference

  Returns the array of all elements in the first array not contained in the second array.

  **Import:**

  ```typescript
  import { difference } from '@unboxing/array'
   // or
   import { difference } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | a | array | | The first array. |
  | b | array | | The second array. |

  **Return:** `Array`, The elements in `a` that are not in `b`.

  **Example:**

  ```typescript
  difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
  difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
  ```

  ### drop

  Returns all but the first `n` elements of the given list, string.

  **Import:**

  ```typescript
  import { drop } from '@unboxing/array'
  // or
  import { drop } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | n | number | |  |
  | xs | array\<any> | |  |

  **Return:** `any`, A copy of list without the first `n` elements

  **Example:**

  ```typescript
  drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
  drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
  drop(3, ['foo', 'bar', 'baz']); //=> []
  drop(4, ['foo', 'bar', 'baz']); //=> []
  ```

  ### dropArrayLast

  Returns a list containing all but the last `n` elements of the given `list`.

  **Import:**

  ```typescript
  import { dropArrayLast } from '@unboxing/array'
  // or
  import { dropArrayLast } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | n | number |  | The number of elements of list to skip.|
  | xs | array\<any> |  | The list of elements to consider. |

  **Return:** `Array`, A copy of the list with only the first `list.length - n` elements

  **Example:**

  ```typescript
  dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
  dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
  dropLast(3, ['foo', 'bar', 'baz']); //=> []
  dropLast(4, ['foo', 'bar', 'baz']); //=> []
  dropLast(3, 'ramda');               //=> 'ra'
  ```

  ### dropArrayWhile

  Iterate over an input `list`, calling a provided function `fn` for each element in the list.

  **Import:**

  ```typescript
  import { dropArrayWhile } from '@unboxing/array'
  // or
  import { dropArrayWhile } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | fn | Function |  | The function to invoke. Receives three argument: `value`, `index`, `arr`.|
  | xs | array\<any> |  | The list to iterate over. |

  **Example:**

  ```typescript
  var printXPlusFive = x => console.log(x + 5);
  each(printXPlusFive, [1, 2, 3]);
  // logs 6
  // logs 7
  // logs 8
  ```

  ### filterArray

  Takes a predicate and a "arr", and returns a new array of the same type containing the members of the given arr which satisfy the given predicate.

  **Import:**

  ```typescript
  import { filterArray } from '@unboxing/array'
  // or
  import { filterArray } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | fn | Function |  | predicate |
  | xs | array\<any> |  | The list to iterate over. |

  **Return:** `Array`

  **Example:**

  ```typescript
  var isEven = n => n % 2 === 0;
  filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
  ```

  ### findArray

  Returns the first element of the list which matches the predicate, or `undefined` if no element matches.

  **Import:**

  ```typescript
  import { findArray } from '@unboxing/array'
  // or
  import { findArray } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | fn | Function |  | The predicate function used to determine if the element is the desired one. |
  | arr | Array\<any> |  | The array to consider. |

  **Return:** `any`, The element found, or `undefined`.

  **Example:**

  ```typescript
  var xs = [{a: 1}, {a: 2}, {a: 3}];
  find(x => x.a === 2)(xs); //=> {a: 2}
  find(x => x.a === 4)(xs); //=> undefined
  ```

  ### findArrayIndex

  Returns the index of the first element of the list which matches the predicate, or `-1` if no element matches.

  **Import:**

  ```typescript
  import { findArrayIndex } from '@unboxing/array'
  // or
  import { findArrayIndex } from '@unboxing/unboxing'
  ```

  **Param:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | fn | Function |  | The predicate function used to determine if the element is the desired one. |
  | arr | Array\<any> |  | The array to consider. |


  **Return:** `number`, The index of the element found, or `-1`.

  **Example:**

  ```typescript
  var xs = [{a: 1}, {a: 2}, {a: 3}];
  findArrayIndex(x => x.a === 2)(xs); //=> 1
  findArrayIndex(x => x.a === 4)(xs); //=> -1
  ```

  ### findArrayLast

  Returns the last element of the list which matches the predicate, or `undefined` if no element matches.

  **Import:**

  ```typescript
  import { findArrayLast } from '@unboxing/array'
  // or
  import { findArrayLast } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | fn | Function |  | The predicate function used to determine if the element is the desired one. |
  | list | Array\<any> |  | The array to consider. |

  **Return:** `any`, 	The element found, or `undefined`.

  **Example:**

  ```typescript
  const xs = [{a: 1, b: 0}, {a:1, b: 1}];

  findArrayLast(propEq('a', 1))(xs); //=> {a: 1, b: 1}
  findArrayLast(propEq('a', 4))(xs); //=> undefined
  ```

  ### flatten

  Returns a new list by pulling every item out of it (and all its sub-arrays) and putting them in a new array, depth-first.

  **Import:**

  ```typescript
  import { flatten } from '@unboxing/array'
  // or
  import { flatten } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | array | array\<any> |  | The array to consider. |

  **Return:** `Array`, The flattened list.

  **Example:**

  ```typescript
  flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
  //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  ```

  ### head

  Returns the first element of the given array.

  **Import:**

  ```typescript
  import { head } from '@unboxing/array'
  // or
  import { head } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | arr | array\<any> |  |  |

  **Return:** `any`

  **Example:**

  ```typescript
  head(['fi', 'fo', 'fum']); //=> 'fi'
  head([]); //=> undefined
  ```

  ### includes

  Dispatches call to arr.indexOf, returns true if arr is array and value in the array or if arr is string and value is substring of arr.

  **Import:**

  ```typescript
  import { includes } from '@unboxing/array'
  // or
  import { includes } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | value | any |  | The item to compare against. |
  | arr | array\<any> / string |  | The array to consider. |

  **Return:** `boolean`, `true` if the item is in the list, `false` otherwise.

  **Example:**

  ```typescript
  includes(3, [1, 2, 3]); //=> true
  includes(4, [1, 2, 3]); //=> false
  includes('test', 'aaatest'); //=> true
  ```

  ### indexBy

  Given a function that generates a key, turns a list of objects into an object indexing the objects by the given key. Note that if multiple objects generate the same value for the indexing key only the last value will be included in the generated object.

  **Import:**

  ```typescript
  import { includes } from '@unboxing/array'
  // or
  import { includes } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | fn | Function |  | Function :: a -> String. |
  | arr | Array\<any>  |  | The array of objects to index. |

  **Return:** `any`, An object indexing each array element by the given property.

  **Example:**

  ```typescript
  var list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
  indexBy(x => x.id, list);
  //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
  ```

  ### indexOf

  Returns the position of the first occurrence of an item in an array, or -1 if the item is not included in the array.

  **Import:**

  ```typescript
  import { indexOf } from '@unboxing/array'
  // or
  import { indexOf } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | target | any |  | The item to find. |
  | xs | array\<any> / string |  | The array to search in. |

  **Return:** `number`, the index of the target, or -1 if the target is not found.

  **Example:**

  ```typescript
  indexOf(3, [1,2,3,4]); //=> 2
  indexOf(10, [1,2,3,4]); //=> -1
  ```

  ### intersection

  Combines two array into a set (i.e. no duplicates) composed of those elements common to both arrays.

  **Import:**

  ```typescript
  import { intersection } from '@unboxing/array'
  // or
  import { intersection } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | a | array\<any> |  | The first array. |
  | b | array\<any> |  | The second array. |

  **Return:** `Array`, The array of elements found in both `a` and `b`.

  **Example:**

  ```typescript
  intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
  ```

  ### joinArray

  Returns a string made by inserting the separator between each element and concatenating all the elements into a single string.

  **Import:**

  ```typescript
  import { joinArray } from '@unboxing/array'
  // or
  import { joinArray } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | separator | string |  | The string used to separate the elements. |
  | arr | array\<any> |  | The elements to join into a string. |

  **Return:** `string`, str The string made by concatenating `arr` with `separator`.

  **Example:**

  ```typescript
  var spacer = joinArray(' ');
  spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
  joinArray('|', [1, 2, 3]);    //=> '1|2|3'
  ```

  ### last

  Returns the last element of the given array.

  **Import:**

  ```typescript
  import { last } from '@unboxing/array'
  // or
  import { last } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | arr | array\<any> |  |  |

  **Return:** `any`

  **Example:**

  ```typescript
  last(['fi', 'fo', 'fum']); //=> 'fum'
  last([]); //=> undefined
  ```

  ### lengthArray

  Returns the number of elements in the array by returning `arr.length`.

  **Import:**

  ```typescript
  import { lengthArray } from '@unboxing/array'
  // or
  import { lengthArray } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | arr | array\<any> |  | The array to inspect. |

  **Return:** `number`, The length of the array.

  **Example:**

  ```typescript
  lengthArray([]); //=> 0
  lengthArray([1, 2, 3]); //=> 3
  ```







