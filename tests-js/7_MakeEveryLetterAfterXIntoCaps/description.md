# Make every letter after X into caps.
## 7 Kyu

Imagine a book author has hired us to create a function that takes his book as a string as input and finds all instances of a letter that we will call 'x' (case-sensitive) and turns all the letters after 'x' into a capital letter.

For example.
```
makeEveryLetterAfterXCaps('and larry walked into the park late to chase a squirrel', 'l')
```
Should return:
```
"and lArry walKed into the park lAte to chase a squirrel"
```
If the letter after x is already in caps it should stay in caps.

Note that the swapping occurs considering the modified string, so makeEveryLetterAfterXCaps('aaaa', 'a') will result into "aAaA"
