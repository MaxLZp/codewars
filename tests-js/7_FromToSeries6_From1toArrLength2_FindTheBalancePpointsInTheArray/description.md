# From..To..Series #6: from 1 to arr.length-2. Find the balance points in the array
## 7 kyu

Description:


Given an array arr with positive integers, and more than 2 elements, return an array with the indexes of those elements, such as the average of its left side equals the average of its right side. The comparison will be between integer values, so you should round the average value first(to the nearest integer), and then do the comparison. If no element fulfills such condition, just return an empty array [].

### Examples
```
findBalance([1,2,1]) === [1]

The balance point at index 1:
Left     Middle     Right
 1         2          1
left == right

findBalance([1,2,3]) === []

No balance point found, return an empty array.

findBalance([1,2,3,2,1]) === [2]

The balance point at index 2:
 Left     Middle     Right
 1,2        3         2,1
left  --> (1 + 2) / 2 --> 1.5 --> round(1.5) --> 2
right --> (2 + 1) / 2 --> 1.5 --> round(1.5) --> 2
left == right

findBalance([1,1,1,1,1]) === [1,2,3]

The balance point at index 1,2 and 3:
 Left     Middle     Right
  1         1        1,1,1
 1,1        1         1,1
1,1,1       1          1
In these 3 situations, the average of left side and
right side all are 1.

findBalance([1,1,2,1,1]) === [1,2,3]

The balance point at index 1,2 and 3:
 Left     Middle     Right
  1         1        2,1,1
 1,1        2         1,1
1,1,2       1          1
In these 3 situations, the average of left side and
right side all are 1(after rounding operation).


findBalance([1,1,3,1,1]) === [2]
```
