# Are they square 2?
## 6 kyu
Another Kata testing whether all elements of an array are square numbers, although this time the array can be a multidimensional array with any number of dimensions.

Your task - Write a function that checks whether all elements in a multidimensional array are square numbers. The function should be able to take any number of array elements and any number of dimensions.

Your function should return `true` if all elements are square numbers and `false` if not.

An entirely empty array should return `undefined/NULL` depending on the language you are completing this Kata in.

You can assume that all array elements will be positive integers.

### Examples
```
[1, 4, 9, 16, 25, 36]: true

[1, 2, 3, 4, 5, 6]: false

[1, [4], [9, 16, 25], [36, 49, [64, 81]],
 [100, [121, 144, [169]]],
 [196, [225, [256, 289, [324, [361, 400]]]]]
]: true

```