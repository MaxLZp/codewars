This is a **classic greedy digit rearrangement problem**. Let me break it down for you.

### Approach

1. Convert `n` into a list of digits (string form is easiest).
2. Try every possible move:
   * For each digit `i`, remove it.
   * Insert it at every possible position `j`.
   * Form the new number and check.
3. Keep track of the **best candidate**:
   * Compare numbers as integers (or as strings if no leading zeros).
   * If a tie, prefer smaller `i`, then smaller `j`.
Since `n` is a string of digits, length is typically not huge (fits into `10^18` constraints in some kata versions).
