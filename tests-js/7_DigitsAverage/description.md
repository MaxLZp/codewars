# Digits Average
## 7 Kyu

Given a non-negative integer, take the (mean) average of each pair of consecutive digits. Repeat this process until you have a single integer, then return that integer. e.g.

Note: if the average of two digits is not an integer, round the result up (e.g. the average of `8` and `9` will be `9`)

### Examples
```
Integer 246  ==>  Should return 4

original: 2   4   6
           \ / \ /
1st iter:   3   5
             \ /
2nd iter:     4


Integer 89  ==>  Should return 9

original: 8   9
           \ /
1st iter:   9
```
