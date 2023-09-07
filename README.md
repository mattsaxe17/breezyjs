<p align="center">
  <img alt="BreezyJs Logo" src="https://user-images.githubusercontent.com/54588865/143978769-18b3cc1c-f53f-4f39-83a9-9d1c46868198.png" width="400"/>
</p>

BreezyJs is a javascript library built for making common tasks easier and more readable. All methods are attached directly to native prototypes, allowing you to do things like this...

```javascript
let players = [
  { name: 'John', team: { name: 'Red Sox', color: 'Red' }, points: 23 },
  { name: 'Rigley', team: { name: 'Blue Beans', color: 'Blue' }, points: 13 },
  { name: 'Bingo', team: { name: 'Red Sox', color: 'Red' }, points: 8 },
  { name: 'Jane', team: { name: 'Blue Beans', color: 'Blue' }, points: 31 },
];

let redPoints = players.where('team.color', 'Red').sumOf('points');

console.log(redPoints); // 31
```

## Installation & usage

```bash
npm install breezyjs
```

Simply install BreezyJs and require/import it once before you use it. There's no need to assign it to a variable.

```javascript
require('breezyjs');
// or
import 'breezyjs';
```

That's it! BreezyJs methods will now be attached to prototypes.

## Error handling

BreezyJs provides detailed error messages for easier debugging.

```
Uncaught BreezyJsTypeError: (Method "mergeSort") Argument at index 0 (arguments[0]) expects type "string" or "number", but recieved type "array"
```

## Methods

### Array

- [at](#at)
- [chunk](#chunk)
- [compact](#compact)
- [count](#count)
- [countBy](#countBy)
- [delimit](#delimit)
- [dropLeft](#dropLeft)
- [dropRight](#dropRight)
- [first](#first)
- [flatten](#flatten)
- [group](#group)
- [insert](#insert)
- [interquartileRange](#interquartileRange)
- [intersection](#intersection)
- [last](#last)
- [mean](#mean)
- [median](#median)
- [mergeSort](#mergeSort)
- [mode](#mode)
- [popN](#popN)
- [pull](#pull)
- [pushUniq](#pushUniq)
- [range](#range)
- [remove](#remove)
- [roundAll](#roundAll)
- [sample](#sample)
- [shiftN](#shiftN)
- [shuffle](#shuffle)
- [sortBy](#sortBy)
- [standardDeviation](#standardDeviation)
- [sum](#sum)
- [sumOf](#sumOf)
- [toggle](#toggle)
- [union](#union)
- [variance](#variance)
- [where](#where)

#### at

Returns the element of an array at the specified index. Accepts negative numbers, which will take from the end, starting at -1.

##### Arguments

index (number): The index of the element to get

##### Returns

(\*): Returns the element at a given index

##### Example

```javascript
[1, 2, 4, 5, 5, 6, 8, 9]
  .at(3) // 5
  [('red', 'blue', 'green', 'orange', 'yellow')].at(-2); // 'orange'
```

---

#### chunk

Returns an array of arrays, each of the specified length. The last chunk may not be full, taking the remaining elements.

##### Arguments

size (number): The size of the chunks

##### Returns

(Array): Returns an array of chunks

##### Example

```javascript
[1, 2, 5, 7, 2, 7, 9, 3, 2, 4, 6].chunk(3);

// [[1, 2, 5], [7, 2, 7], [9, 3, 2], [4, 6]]
```

---

#### compact

Returns a new array with falsey values removed.

##### Arguments

_none_

##### Returns

(Array): Returns a compacted array

##### Example

```javascript
[1, 0, '', 'red', false, true].compact();

// [1, 'red', true]
```

---

#### count

Returns the number of times a value is found in an array. Handles objects.

##### Arguments

_none_

##### Returns

(number): Returns the count of an element

##### Example

```javascript
[{ name: 'jeff' }, 'red', 12, { name: 'jeff' }, true].count({ name: 'jeff' });

// 2
```

---

#### countBy

Returns the number of elements that cause a provided function to return true.

##### Arguments

iteree (Function): The iteree invoked on each element

##### Returns

(number): Returns the number of elements

##### Example

```javascript
[
  'red',
  'green',
  'orange',
  () => {
    console.log('hi');
  },
].countBy(elem => elem.contains('g'));

// 2
```

---

#### delimit

Returns a delimited string from an array's elements.

##### Arguments

delimiter (string): The delimiter

##### Returns

(String): Returns a delimited string

##### Example

```javascript
['bread', 'milk', 'eggs', 'apples'].delimit(' | ');

// "bread | milk | eggs | apples"
```

---

#### dropLeft

Returns a new array with the specified number of elements dropped from the left side. The default is one.

##### Arguments

n (number): The number to drop

##### Returns

(Array): Returns an array

##### Example

```javascript
['cake', 'cookies', 'brownies', 'chocolate', 'donuts'].dropLeft(3);

// ['chocolate', 'donuts']
```

---

#### dropRight

Returns a new array with the specified number of elements dropped from the right side. The default is one.

##### Arguments

n (number): The number to drop

##### Returns

(Array): Returns an array

##### Example

```javascript
['cake', 'cookies', 'brownies', 'chocolate', 'donuts'].dropRight(2);

// ['cake', 'cookies', 'brownies']
```

---

#### first

Returns the first element of an array.

##### Arguments

_none_

##### Returns

(\*): Returns an element

##### Example

```javascript
[9, 8, 7, 6].first();

// 9
```

---

#### flatten

Returns a flattened array where nesting is eliminated, bringing all elements to the first-level array.

##### Arguments

_none_

##### Returns

(Array): Returns a flattened array

##### Example

```javascript
[[[1, 2]], 3, 4, [5]].flatten();

// [1, 2, 3, 4, 5]
```

---

#### group

Returns an object with keys representing a value from the original array, and values representing the number of times the value was found.

##### Arguments

_none_

##### Returns

(Object): Returns an object

##### Example

```javascript
['red', 'red', 'green', 'green', 'green', 'orange', 'yellow'].group();

// { red: 2, green: 3, orange: 1, yellow: 1 }
```

---

### Object

### Collection
