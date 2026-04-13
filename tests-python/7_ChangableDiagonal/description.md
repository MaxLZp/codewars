# Changable Diagonal
## 7 kyu

On June 14th, 2025, I took my first ever UNT exam (United National Testing - the main exam in Kazakhstan). On that day, I faced this beginner-friendly task that I wanted to publish here.
Task

Given a matrix (NxN), and a specific value.

What the value does is it changes the main diagonal of the matrix. The sum of elements of the main diagonal is basically the trace of the matrix (read this article if you are unaware of what the trace is).

- If `value > 0`, the main diagonal drops down.
- If `value < 0`, the main diagonal goes up.
- If `value = 0`, the diagonal does not change.

With this example here (I marked the diagonal numbers with `*`):
```
# Input:

matrix = [[ 1,  2,  3,  4],
          [ 5,  6,  7,  8],
          [ 9, 10, 11, 12],
          [13, 14, 15, 16]]

value = 2

[[*1,   2,   3,   4],
 [ 5,  *6,   7,   8],
 [ 9,  10, *11,  12],
 [13,  14,  15, *16]]

# The main diagonal here is [1, 6, 11, 16] but with given value 2:

[[ 1,   2,  3,  4],
 [ 5,   6,  7,  8],
 [*9,  10, 11, 12],
 [13, *14, 15, 16]]

# The main diagonal is [9, 14].

# In case of the value being negative, for example -2:

[[ 1,  2, *3,  4],
 [ 5,  6,  7, *8],
 [ 9, 10, 11, 12],
 [13, 14, 15, 16]]

# The main diagonal is [3, 8].
```
With these rules in effect, find the the trace of a matrix with the given value.
The value will never reach the size of the matrix. 