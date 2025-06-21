# Binary Representation of an Integer
## 7 kyu

Write a function which takes an argument `n`, (a signed 3`2-bit integer in 2s-complement format`) and returns an array of integers of length 32, containing the bits of `n`. (Least Significant Bit on the right).

Assign either a `1` or a `0` to the array element depending on whether the bit at the corresponding position is a `1` or `0`.

For example (input -> output):
```
 1 -> [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
-1 -> [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
```
