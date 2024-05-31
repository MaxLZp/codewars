# Simple Fun #370: Four Sum
## 7 kyu

### Task

You are given four arrays ```A, B, C, D``` of integer values(negative, positive or zero). Your task is to count how many quadruplet ```a, b, c, d(a ∈ A, b ∈ B, c ∈ C, and d ∈ D)``` are such that ```a + b + c + d = 0``` . we assume that all arrays have the same length.

Note, arrays may contains duplicate values, if two or more combinations of ```a,b,c,d``` are the same(same value and same order, but pick from different index), they will be count as 1 combination.

Still don't understand the problem? Look at the following examples:

### Examples
```
For A = [-45,-41,-36,-36,26,-32], B = [22,-27,53,30,38,-54], C = [42,56,-37,-75,-10,-6], D = [-16,30,77,-46,62,45], the output should be 5.

```
the sum of the five following quadruplets is zero:
```
-45, -27, 42, 30
A 	B 	C 	D
-45 	22 	42 	-16
-41 	-27 	56 	30
-36 	53 	-37 	77
-36 	30 	-75 	-46
26 	-38 	-10 	62
-32 	-54 	-6 	45

26, 30, -10, -46
A 	B 	C 	D
-45 	22 	42 	-16
-41 	-27 	56 	30
-36 	53 	-37 	77
-36 	30 	-75 	-46
26 	-38 	-10 	62
-32 	-54 	-6 	45

-32, 22, 56, -46
A 	B 	C 	D
-45 	22 	42 	-16
-41 	-27 	56 	30
-36 	53 	-37 	77
-36 	30 	-75 	-46
26 	-38 	-10 	62
-32 	-54 	-6 	45

-32, 30, -75, 77
A 	B 	C 	D
-45 	22 	42 	-16
-41 	-27 	56 	30
-36 	53 	-37 	77
-36 	30 	-75 	-46
26 	-38 	-10 	62
-32 	-54 	-6 	45

-32, -54, 56, 30
A 	B 	C 	D
-45 	22 	42 	-16
-41 	-27 	56 	30
-36 	53 	-37 	77
-36 	30 	-75 	-46
26 	-38 	-10 	62
-32 	-54 	-6 	45
```
For A = [1,2], B = [2,2], C = [3,3], D = [-6,-6], the output should be 1.

```a,b,c,d``` can only be ```1,2,3,-6``` from these combinations:
```
A 	B 	C 	D
1 	2 	3 	-6
2 	2 	3 	-6
or:
A 	B 	C 	D
1 	2 	3 	-6
2 	2 	3 	-6
or:
A 	B 	C 	D
1 	2 	3 	-6
2 	2 	3 	-6
```
or other combinations(omitted..)

### Note

- 2 <= A.length <=50
- A.length = B.length = C.length = D.length
- -100 <= A[i],B[i],C[i],D[i] <=100
