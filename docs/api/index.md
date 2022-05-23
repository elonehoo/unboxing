---
editLink: true
---

# API Reference

> Here we can clearly understand the usage of each API.

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

  ### map

  Creates an array of values by running each element in list through fn. The fn is invoked with three arguments: (value, index, arr).

  **Import:**

  ```typescript
  import { map } from '@unboxing/array'
  // or
  import { map } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | fn | Function |  | The function to be called on every element of the input `list`. |
  | arr | array\<any> |  | The list to be iterated over. |

  **Return:** `array`, The new list.

  **Example:**

  ```typescript
  var double = x => x * 2;
  map(double, [1, 2, 3]); //=> [2, 4, 6]
  ```

  ### maxBy

  Return max value in array, depending on result of calling `fn`

  **Import:**

  ```typescript
  import { maxBy } from '@unboxing/array'
  // or
  import { maxBy } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | fn | Function |  | The function invoked per element. |
  | arr | array\<any> |  |  |

  **Return:** `any`, Returns the maximum value.

  **Example:**

  ```typescript
  var objects = [{ 'n': 1 }, { 'n': 2 }];

  maxBy(o => o.n, objects); // => { 'n': 2 }
  ```

  ### nth

  Returns the nth element of the given array. If n is negative the element at index length + n is returned.

  **Import:**

  ```typescript
  import { nth } from '@unboxing/array'
  // or
  import { nth } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | index | number |  |  |
  | arr | array\<any> |  |  |

  **Return:** `any`

  **Example:**

  ```typescript
  var list = ['foo', 'bar', 'baz', 'quux'];
  nth(1, list); //=> 'bar'
  nth(2, list); //=> 'baz'
  nth(-1, list); //=> 'quux'
  nth(-99, list); //=> undefined
  ```

  ### partition

  Takes a predicate and a array and returns the pair of arrays of the same type of elements which do and do not satisfy, the predicate, respectively.

  **Import:**

  ```typescript
  import { partition } from '@unboxing/array'
  // or
  import { partition } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | fn | Function |  | A predicate to determine which side the element belongs to. |
  | arr | array\<any> |  | the array to partition. |

  **Return:** `array<any>`, An array, containing first the subset of elements that satisfy the predicate, and second the subset of elements that do not satisfy.

  **Example:**

  ```typescript
  partition(includes('s'), ['sss', 'ttt', 'foo', 'bars']);
  // => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
  ```

  ### pluck

  Returns a new list by plucking the same named property off all objects in the list supplied.

  **Import:**

  ```typescript
  import { pluck } from '@unboxing/array'
  // or
  import { pluck } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | key | string |  | The key name to pluck off of each object. |
  | arr | array\<any> |  | The array to consider. |

  **Return:** `array`, The list of values for the given key.

  **Example:**

  ```typescript
  pluck('a')([{a: 1}, {a: 2}]); //=> [1, 2]
  pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]
  ```

  ### range

  Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end. A step of -1 is used if a negative start is specified without an end or step. If end is not specified, it's set to start with start then set to 0.

  :::tip note
  JavaScript follows the IEEE-754 standard for resolving floating-point values which can produce unexpected results.
  :::

  **Import:**

  ```typescript
  import { range } from '@unboxing/array'
  // or
  import { range } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | a | number | <ul><li>optional</li><li>default: 0</li></ul> | The start of the range. |
  | b | number |  | The end of the range. |
  | step | number | <ul><li>optional</li><li>default: 0</li></ul> | The value to increment or decrement by. |

  **Return:** `array`, Returns the range of numbers.

  **Example:**

  ```typescript
  range(4); // => [0, 1, 2, 3]

  range(-4); // => [0, -1, -2, -3]

  range(1, 5); // => [1, 2, 3, 4]

  range(0, 20, 5); // => [0, 5, 10, 15]

  range(0, -4, -1); // => [0, -1, -2, -3]

  range(0); // => []
  ```

  ### reduceArray

  Returns a single item by iterating through the list, successively calling the iterator function and passing it an accumulator value and the current value from the array, and then passing the result to the next call.

  **Import:**

  ```typescript
  import { reduceArray } from '@unboxing/array'
  // or
  import { reduceArray } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | fn | Function |  | The iterator function. Receives two values, the accumulator and the current element from the array. |
  | acc | any |  | The accumulator value. |
  | arr | array\<any> |  | The list to iterate over. |

  **Return:** `any`, The final, accumulated value.

  **Example:**

  ```typescript
  var numbers = [1, 2, 3];
  var plus = (a, b) => a + b;

  reduceArray(plus, 10, numbers); //=> 16
  ```

  ### reduceWhile

  Returns a single item by iterating through the list, successively calling the iterator function. reduceWhile also takes a predicate that is evaluated before each step. If the predicate returns false, it "short-circuits" the iteration and returns the current value of the accumulator.

  :::tip node
  if `arr` is undefined or null, `acc` will be returned by reference immediately
  :::

  **Import:**

  ```typescript
  import { reduceWhile } from '@unboxing/array'
  // or
  import { reduceWhile } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | pred | Function |  | The predicate function. If it returns a truthy value, reduce continues. Receives the accumulator and the current element |
  | fn | Function |  | The iterator function. Receives four values, the accumulator, the current element from the array, its index, and the original array. |
  | acc | any |  | The accumulator value. |
  | arr | array\<any> |  | The list to iterate over. |

  **Return:** `any`, The final, accumulated value.

  **Example:**

  ```typescript
  reduceWhile(acc => acc.length < 3, (acc, x) => acc + x, '1', ['2', '3', '4', '5']) // '123'
  ```

  ### reject

  Takes a predicate and a "arr", and returns a new array of the same type containing the members of the given arr which do not satisfy the given predicate.

  **Import:**

  ```typescript
  import { reject } from '@unboxing/array'
  // or
  import { reject } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | fn | Function |  | predicate |
  | arr | array\<any> |  | The list to iterate over. |

  **Return:** `array`

  **Example:**

  ```typescript
  var isEven = n => n % 2 === 0;

  reject(isEven, [1, 2, 3, 4]); //=> [1, 3]
  ```

  ### removeArray

  Removes the sub-list of list starting at index start and containing count elements. Note that this is not destructive: it returns a copy of the list with the changes. <small>No lists have been harmed in the application of this function.</small>

  **Import:**

  ```typescript
  import { removeArray } from '@unboxing/array'
  // or
  import { removeArray } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | start | number |  | The position to start removing elements |
  | count | number |  | The number of elements to remove |
  | list | array\<any> |  | The list to remove from |

  **Return:** `any`

  **Example:**

  ```typescript
  removeArray(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
  ```

  ### repeatArray

  Returns a fixed list of size `n` containing a specified identical value.

  **Import:**

  ```typescript
  import { repeatArray } from '@unboxing/array'
  // or
  import { repeatArray } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | n | number |  | The desired size of the output list. |
  | value | any |  | The value to repeat. |

  **Return:** `array`, A new array containing `n` values.

  **Example:**

  ```typescript
  repeatArray(5, 'hi'); //=> ['hi', 'hi', 'hi', 'hi', 'hi']

  var obj = {};
  var repeatedObjs = repeatArray(5, obj); //=> [{}, {}, {}, {}, {}]
  repeatedObjs[0] === repeatedObjs[1]; //=> true
  ```

  ### reverseArray

  Returns a new list or string with the elements or characters in reverse order.

  **Import:**

  ```typescript
  import { reverseArray } from '@unboxing/array'
  // or
  import { reverseArray } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | list | array\<any> \| string |  |  |

  **Return:** `array<any>` | `string`

  **Example:**

  ```typescript
  reverseArray([1, 2, 3]);  //=> [3, 2, 1]
  reverseArray([1, 2]);     //=> [2, 1]
  reverseArray([1]);        //=> [1]
  reverseArray([]);         //=> []

  reverseArray('abc');      //=> 'cba'
  reverseArray('ab');       //=> 'ba'
  reverseArray('a');        //=> 'a'
  reverseArray('');         //=> ''
  ```

  ### shuffle

  Creates an array of shuffled values

  **Import:**

  ```typescript
  import { reverseArray } from '@unboxing/array'
  // or
  import { reverseArray } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | arr | array\<any> |  | The collection to shuffle. |

  **Return:** `array<any>`, Returns the new shuffled array.

  **Example:**

  ```typescript
  shuffle([1, 2, 3, 4]); // => [4, 1, 3, 2]
  ```

  ### sliceArray

  Returns the elements of the given list or string (or object with a `slice` method) from `fromIndex` (inclusive) to toIndex (exclusive).

  **Import:**

  ```typescript
  import { sliceArray } from '@unboxing/array'
  // or
  import { sliceArray } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | fromIndex | number |  | The start index (inclusive). |
  | toIndex | number |  | The end index (exclusive). |
  | list | array\<any> \| string |  |  |

  **Return:** `array<any>` | `string`

  **Example:**

  ```typescript
  sliceArray(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
  sliceArray(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
  sliceArray(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
  sliceArray(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
  ```

  ### sortArray

  Returns a copy of the array, sorted according to the comparator function, which should accept two values at a time and return a negative number if the first value is smaller, a positive number if it's larger, and zero if they are equal. Please note that this is a copy of the list. It does not modify the original.

  **Import:**

  ```typescript
  import { sortArray } from '@unboxing/array'
  // or
  import { sortArray } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | comparator | Function |  | A sorting function |
  | arr | array\<ant> |  | The list to sort |

  **Return:** `array<any>`, a new array with its elements sorted by the comparator function.

  **Example:**

  ```typescript
  var diff = function(a, b) { return a - b; };
  sortArray(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
  ```

  ### sortArrayBy

  Sorts the array according to the supplied function.

  **Import:**

  ```typescript
  import { sortArrayBy } from '@unboxing/array'
  // or
  import { sortArrayBy } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | fn | Function |  |  |
  | arr | array\<any> |  | The array to sort. |

  **Return:** `array<any>`, A new array sorted by the keys generated by `fn`.

  **Example:**

  ```typescript
  var sortByFirstItem = sortArrayBy(x => x[0]);
  var pairs = [[-1, 1], [-2, 2], [-3, 3]];
  sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
  ```

  ### splitArrayEvery

  Splits a collection into slices of the specified length.

  **Import:**

  ```typescript
  import { splitArrayEvery } from '@unboxing/array'
  // or
  import { splitArrayEvery } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | length | number |  | desired length of slices. |
  | arr | array\<any> \| string |  | a collection to split. |

  **Return:** `array<any>[]` | `string`

  **Example:**

  ```typescript
  splitArrayEvery(2, [1, 2, 3, 4, 5]); // => [[1, 2], [3, 4], [5]]
  ```

  ### stableSortBy

  Sorts the array according to the supplied function and keeping the order of elements.

  **Import:**

  ```typescript
  import { stableSortBy } from '@unboxing/array'
  // or
  import { stableSortBy } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | fn | Function |  |  |
  | arr | array\<any> |  | The array to sort. |

  **Return:** `array<any>`, A new array sorted by the keys generated by `fn`.

  **Example:**

  ```typescript
  const people = [
    { name: 'Ann', age: 20 },
    { name: 'Gary', age: 20 },
    { name: 'John', age: 17 },
    { name: 'Sam', age: 21 },
    { name: 'Bob', age: 17 }
  ]
  stableSortBy(path(['age']), people) => [
    { name: 'John', age: 17 },
    { name: 'Bob', age: 17 },
    { name: 'Ann', age: 20 },
    { name: 'Gary', age: 20 },
    { name: 'Sam', age: 21 }
  ]
  ```

  ### sumArray

  Adds together all the elements of a list.

  **Import:**

  ```typescript
  import { sumArray } from '@unboxing/array'
  // or
  import { sumArray } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | arr | array\<number> |  | An array of numbers. |

  **Return:** `number`, The sum of all the numbers in the list.

  **Example:**

  ```typescript
  sumArray([2,4,6,8,100,1]); //=> 121
  ```

  ### tailArray

  Adds together all the elements of a list.

  **Import:**

  ```typescript
  import { tailArray } from '@unboxing/array'
  // or
  import { tailArray } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | arr | array\<any> |  |  |

  **Return:** `any`

  **Example:**

  ```typescript
  tailArray(['fi', 'fo', 'fum']); //=> ['fo', 'fum']
  tailArray([]); //=> []
  ```

  ### takeArray

  Returns the first `n` elements of the given array or string

  **Import:**

  ```typescript
  import { takeArray } from '@unboxing/array'
  // or
  import { takeArray } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | arr | array\<any> \| string |  |  |
  | n | number |  |  |

  **Return:** `any`

  **Example:**

  ```typescript
  takeArray(1, ['foo', 'bar', 'baz']); //=> ['foo']
  takeArray(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
  takeArray(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
  takeArray(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
  takeArray(3, 'ramda');               //=> 'ram'
  ```

  ### takeRightWhile

  Returns a new array|string containing the last `n` elements of a given array|string, passing each value to the supplied predicate function, and terminating when the predicate function returns `false`. Excludes the element that caused the predicate function to fail.

  **Import:**

  ```typescript
  import { takeRightWhile } from '@unboxing/array'
  // or
  import { takeRightWhile } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | fn | Function |  | The function called per iteration. |
  | arr | array\<ant> \| string |  | The collection to iterate over. |

  **Return:** `array<any>` | string, A new array or string.

  **Example:**

  ```typescript
  var isNotOne = x => x !== 1;

  takeRightWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
  ```

  ### toArray

  Converts val to array. If val is array return it.

  **Import:**

  ```typescript
  import { toArray } from '@unboxing/array'
  // or
  import { toArray } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | val | any |  |  |

  **Return:** `array<any>`

  **Example:**

  ```typescript
  toArray([1,2,3]) // => [1,2,3]
  toArray(5) // => [5]
  toArray('test') // => ['test']
  ```

  ### unique

  Returns unique items in array

  **Import:**

  ```typescript
  import { unique } from '@unboxing/array'
  // or
  import { unique } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | arr | array\<any> |  |  |

  **Return:** `array<any>`

  **Example:**

  ```typescript
  unique([1,2,1,2,3,4,1,2]) // => [1, 2, 3, 4]
  ```

  ### uniqueBy

  Returns unique items in array. Uniqueness is defined by `fn`.

  **Import:**

  ```typescript
  import { uniqueBy } from '@unboxing/array'
  // or
  import { uniqueBy } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | fn | Function |  |  |
  | arr | array\<any> |  |  |

  **Return:** `array<any>`

  **Example:**

  ```typescript
  uniqueBy(x => x % 2, [1, 2, 2, 3, 4, 5, 5, 5]) // [1, 2]
  ```

  ### updateArray

  Returns a new copy of the array with the element at the provided index replaced with the given value.

  **Import:**

  ```typescript
  import { updateArray } from '@unboxing/array'
  // or
  import { updateArray } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | idx | number |  | index |
  | x | any |  | The value to exist at the given index of the returned array. |
  | list | array\<any> |  | The source array to be updated. |

  **Return:** `array<any>`, A copy of `list` with the value at index `idx` replaced with `x`.

  **Example:**

  ```typescript
  updateArray(1, 11, [0, 1, 2]);     //=> [0, 11, 2]
  updateArray(1)(11)([0, 1, 2]);     //=> [0, 11, 2]
  ```

  ### withoutArray

  Returns a new list without values in the first argument.

  **Import:**

  ```typescript
  import { withoutArray } from '@unboxing/array'
  // or
  import { withoutArray } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | xs | array\<any> |  | The values to be removed from `list2`. |
  | list | array\<any> |  | The array to remove values from. |

  **Return:** `array<any>`, The new array without values in `list1`.

  **Example:**

  ```typescript
  withoutArray([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
  ```

  ### zip

  Creates a new list out of the two supplied by pairing up equally-positioned items from both lists. The returned list is truncated to the length of the shorter of the two input lists.

  **Import:**

  ```typescript
  import { zip } from '@unboxing/array'
  // or
  import { zip } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | a | array\<any> |  | The first array to consider. |
  | b | array\<any> |  | The second array to consider. |

  **Return:** `array<any>`, The list made by pairing up same-indexed elements of `a` and `b`.

  **Example:**

  ```typescript
  zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
  ```

  ### zipWith

  Creates a new list out of the two supplied by applying the function to each equally-positioned pair in the lists. The returned list is truncated to the length of the shorter of the two input lists.

  **Import:**

  ```typescript
  import { zipWith } from '@unboxing/array'
  // or
  import { zipWith } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | fn | Function |  | The function used to combine the two elements into one value. |
  | a | array\<any> |  | The first array to consider. |
  | b | array\<any> |  | The second array to consider. |

  **Return:** `array<any>`, The list made by combining same-indexed elements of `a` and `b` using `fn`.

  **Example:**

  ```typescript
  var f = (x, y) => {
    // ...
  };
  zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
  //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
  ```

## Function

  ### F

  A function that always returns `false`. Any passed in parameters are ignored.

  **Import:**

  ```typescript
  import { f } from '@unboxing/function'
  // or
  import { f } from '@unboxing/unboxing'
  ```

  **Return:** `boolean`

  **Example:**

  ```typescript
  f(); //=> false
  ```

  ### T

  A function that always returns `true`. Any passed in parameters are ignored.

  ```typescript
  import { t } from '@unboxing/function'
  // or
  import { t } from '@unboxing/unboxing'
  ```

  **Return:** `boolean`

  **Example:**

  ```typescript
  t(); //=> true
  ```

  ### allPass

  Takes a list of predicates and returns a predicate that returns true for a given list of arguments if every one of the provided predicates is satisfied by those arguments.

  **Import:**

  ```typescript
  import { allPass } from '@unboxing/function'
  // or
  import { allPass } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | fns | array\<any> |  | predicates |
  | args | any \| any[] |  | passed arguments to predicates |

  **Return:** `Function`

  **Example:**

  ```typescript
  var isQueen = propEq('rank', 'Q');
  var isSpade = propEq('suit', '♠︎');
  var isQueenOfSpades = allPass([isQueen, isSpade]);

  isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
  isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
  ```

  ### always

  Returns a function that always returns the given value. Note that for non-primitives the value returned is a reference to the original value.

  **Import:**

  ```typescript
  import { always } from '@unboxing/function'
  // or
  import { always } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | x | any |  | The value to wrap in a function |

  **Return:** `Function`

  **Example:**

  ```typescript
  var t = always('Tee');
  t(); //=> 'Tee'
  ```

  ### applyOrReturn

  If `test` is function it calls with applied first argument, otherwise just returns `test`

  **Import:**

  ```typescript
  import { applyOrReturn } from '@unboxing/function'
  // or
  import { applyOrReturn } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | test | any |  | if `test` is function it's called with args. |
  | args | array\<any> |  | Arguments passed to `test` if it's a function. |

  **Return:** `any`

  **Example:**

  ```typescript
  applyOrReturn([1,2,3], (...args) => args) // => [1,2,3]
  applyOrReturn([1,2,3], 'test') // => 'test'
  ```

  ### both

  A function wrapping calls to the two functions in an && operation, returning the result of the first function if it is false-y and the result of the second function otherwise. Note that this is short-circuited, meaning that the second function will not be invoked if the first returns a false-y value.

  **Import:**

  ```typescript
  import { both } from '@unboxing/function'
  // or
  import { both } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | f | Function |  | a predicate. |
  | g | Function |  | another predicate. |

  **Return:** `Function`, a function that applies its arguments to f and g and &&s their outputs together.

  **Example:**

  ```typescript
  var gt10 = x => x > 10;
  var even = x => x % 2 === 0;
  var f = both(gt10, even);
  f(100); //=> true
  f(101); //=> false
  ```

  ### comparator

  Makes a comparator function out of a function that reports whether the first element is less than the second.

  **Import:**

  ```typescript
  import { comparator } from '@unboxing/function'
  // or
  import { comparator } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | pred | Function |  | A predicate function of arity two which will return `true` if the first argument is less than the second, `false` otherwise. |

  **Return:** `Function`, A Function :: a -> b -> Int that returns `-1` if a < b, `1` if b < a, otherwise `0`.

  **Example:**

  ```typescript
  var byAge = comparator((a, b) => a.age < b.age);
  var people = [
    // ...
  ];
  var peopleByIncreasingAge = sort(byAge, people);
  ```

  ### complement

  Takes a function `f` and returns a function `g` such that if called with the same arguments when `f` returns a "truthy" value, `g` returns `false` and when `f` returns a "falsy" value `g` returns `true`.

  **Import:**

  ```typescript
  import { complement } from '@unboxing/function'
  // or
  import { complement } from '@unboxing/unboxing'
  ```

  **Params:**

  | name | type | Attribute | description |
  | --- | --- | --- | --- |
  | fn | Function |  |  |

  **Return:** `Function`

  **Example:**

  ```typescript
  var isNotNil = complement(isNil);
  isNil(null); //=> true
  isNotNil(null); //=> false
  isNil(7); //=> false
  isNotNil(7); //=> true
  ```

