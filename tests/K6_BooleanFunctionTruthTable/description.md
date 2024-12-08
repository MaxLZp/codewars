# Boolean function truth table
## 6 kyu

You are given a Boolean function (i.e. a function that takes boolean parameters and returns a boolean). You have to return a string representing the function's truth table.

#### Formatting rules :
- Variables should be named A, B, C, D ... and so on, in the same order as they are passed to the boolean function
- There won't be more than 26 (A...Z) parameters
- Boolean values will be represented by either 1 (true) or 0 (false)
- If the function is anonymous, use the letter f as a name.
- The first line will consist of, in order:
    - the variables' names, separated by a space ( )
    - two tabulations (\t) characters
    - the function name with, inside parentheses, its parameters separated by commas (,)
    - two newline (\n) characters
- The following lines will consist of, in order:
    - the variables' values, separated by a space ( )
    - two tabulations (\t) characters
    - the function result for this arrangement of variables
    - a newline (\n) character

#### Examples
```
A B        AND(A,B)

0 0        0
0 1        0
1 0        0
1 1        1
```
#### Values ordering :

Pay attention to the way the values are ordered. If we group the variables' values together so as to form a binary number, that number will be incremented by 1 at each row. For instance with 3 variables :
```
000
001
010
011
100
101
110
111
```