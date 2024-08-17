# Exclamation marks series #10: Remove some exclamation marks to keep the same number of exclamation marks at the beginning and end of each word
## 6 kyu

### Description:

Remove the minimum number of exclamation marks from the start/end of each word in the sentence to make their amount equal on both sides.

### Notes:

- Words are separated with spaces
- Each word will include at least 1 letter
- There will be no exclamation marks in the middle of a word

### Examples
```
remove("Hi!") === "Hi"
remove("!Hi! Hi!") === "!Hi! Hi"
remove("!!Hi! !Hi!!") === "!Hi! !Hi!"
remove("!!!!Hi!! !!!!Hi !Hi!!!") === "!!Hi!! Hi !Hi!"
```