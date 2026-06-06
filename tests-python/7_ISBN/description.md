# ISBN
## 7 Kyu

An **ISBN** (International Standard Book Number) is a `ten digit` code which uniquely identifies a book. The first nine digits represent the book and the last digit is used to make sure the ISBN is correct. To verify an ISBN you calculate `10` times the first digit, plus `9` times the second digit, plus `8` times the third... all the way until you add `1` times the last digit. If the final number leaves no remainder when divided by `11` the code is a valid ISBN.

For example `0201103311` is a valid ISBN, since `10*0 + 9*2 + 8*0 + 7*1 + 6*1 + 5*0 + 4*3 + 3*3 + 2*1 + 1*1 = 55`.

Each of the first nine digits can take a value between `0` and `9`. Sometimes it is necessary to make the last digit equal to ten; this is done by writing the last digit as `X`. For example, `156881111X`.

Write a program that reads in an ISBN code (will always be valid) with a single missing digit, marked with a `?`, and outputs the correct value for the missing digit.

### Example:
```
15688?111X => "1"
020161586? => "X"
```

### Input/Output

- `[input]` string representing the 10-digit ISBN code `15688?111X`
- `[output]` string representing the missing digit `'1'`
