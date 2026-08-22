# Let's do a fun graph
## 6 kyu

[Let's do a fun graph](https://www.codewars.com/kata/6444f6b558ed4813e8b70d43/train/php)

You have done some data collection today and you want the data to be well presented by a graph so you have decided to make a quick diagram. Suppose that for this kata your data is presented by an array by their value eg [10,5,3,1,4], then you must present your data as follows:

```
for data = [10,5,3,1,4] :
 ____ ........................ ^ 10
|    |........................ | 9
|    |........................ | 8
|    |........................ | 7
|    |........................ | 6
|    | ____ .................. | 5
|    ||    |............ ____  | 4
|    ||    | ____ ......|    | | 3
|    ||    ||    |......|    | | 2
|    ||    ||    | ____ |    | | 1
|    ||    ||    ||    ||    | | 0
```

### GOOD TO KNOW :

- Each bar is always of width 6.
- The vertical axis must be surrounded with one space character on each side.
- No trailing spaces on any line.
- For this kata we use :
    - the following characters : '_', ' ', '|', '.', '^'.
    - some numbers.
 
- Return type :
    - Your code must return a string consisting of the lines joined by \n.
    - [] and [0] has different returns "" and " ____  ^ 0"

### CRITERIA :

- The length of the array is always less than 50.
- The numbers in data are always < 50
- The numbers in data are always positive

