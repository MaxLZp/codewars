# Good words
## 6 kyu

Remember before the arrival of smartphones, we have the dumbphones with keypad as shown below
```
-----------------------
|  1  | |  2  | |  3  |
|     | | ABC | | DEF |
-----------------------
-----------------------
|  4  | |  5  | |  6  |
| GHI | | JKL | | MNO |
-----------------------
-----------------------
|  7  | |  8  | |  9  |
|PQRS | | TUV | | WXYZ|
-----------------------
-----------------------
|  *  | |  0  | |  #  |
|     | |space| |     |
-----------------------
```
The purpose of this kata is to find words I can type quickly on this dumb keypad, hence `good` words. Good words herein have characters that are on the same pad, or vertical opposite the pad, or horizontally opposite the pad.

### Example

If I typed `J`, any character that must follow J that will make the word good will be `5`, `K` or `L` (on the same pad), any of `4`, `G H`, `I` or `6`, `M`, `N`, `O` (horizontally opposite), or any of `2`, `A`, `B`, C`` or `8`, `T`, `U`, `V` or `0`, space(vertically opposite).

`Jako` is a good word, `Jake` is not! `5n3Y` is a good word too!

###TODO

Write a function `good` that takes a string as argument (case insensitive) and return `true` if the string is a good word and `false` otherwise. An empty strnig is a good word.
