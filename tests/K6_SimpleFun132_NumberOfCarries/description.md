# Simple Fun #132: Number Of Carries
## 6 kyu

Two integer numbers are added using the column addition method. When using this method, some additions of digits produce non-zero carries to the next positions. Your task is to calculate the number of non-zero carries that will occur while adding the given numbers.

The numbers are added in base 10.

### Example

For `a = 543 and b = 3456`, the output should be `0`
For `a = 1927 and b = 6426`, the output should be `2`
For `a = 9999 and b = 1`, the output should be `4`

### Input/Output

- [input] integer a
    - A positive integer.
    - Constraints: `1 ≤ a ≤ 10^7`
- `[input]` integer b
    - A positive integer.
    - Constraints: `1 ≤ b ≤ 10^7`
- `[output]` an integer

