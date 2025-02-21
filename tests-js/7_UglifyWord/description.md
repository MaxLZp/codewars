# Uglify Word
## 7 kyu

In this kata, you have to make a function named uglify_word (uglifyWord in Java and Javascript). It accepts a string parameter.

### Task

The function maintains a flag, initially set to 1, and iterates through the given string, performing the following steps for each character:

- If the character is an alphabet letter (`[a-zA-Z]`):
    - If the flag is 1, convert it to uppercase.
    - If the flag is 0, convert it to lowercase.
    - Toggle the flag after processing the character.
- If the character is not an alphabet letter, leave it unchanged and reset the flag to 1.

The function returns the modified string after processing all characters.

### Examples
```
uglify_word("aaa") === "AaA"
uglify_word("AAA") === "AaA"
uglify_word("BbB") === "BbB"
uglify_word("aaa-bbb-ccc") === "AaA-BbB-CcC"
uglify_word("AaA-BbB-CcC") === "AaA-BbB-CcC"
uglify_word("eeee-ffff-gggg") === "EeEe-FfFf-GgGg"
uglify_word("EeEe-FfFf-GgGg") === "EeEe-FfFf-GgGg"
uglify_word("qwe123asdf456zxc") === "QwE123AsDf456ZxC"
uglify_word("Hello World") === "HeLlO WoRlD"
```
