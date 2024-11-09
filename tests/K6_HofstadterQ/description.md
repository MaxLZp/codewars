# Hofstadter Q
## 6 kyu

[Hofstadter sequences](https://en.wikipedia.org/wiki/Hofstadter_sequence) are a family of related integer sequences, among which the first ones were described by American professor Douglas Hofstadter in his book Gödel, Escher, Bach.
Task

Today we will be implementing the rather chaotic recursive sequence of integers called Hofstadter Q.

The Hofstadter Q is defined as follows:
![](1477baacadb4a3c0f00a1159ded4e8815972f415.svg)

As the author states in the aforementioned book:
> It is reminiscent of the Fibonacci definition in that each new value is a sum of two previous values - but not of the immediately previous two values. Instead, the two immediately previous values tell how far to count back to obtain the numbers to be added to make the new value.

The function produces the sequence
```
1, 1, 2, 3, 3, 4, 5, 5, 6, ..
```
Test info
```
100 random tests ( LC: 20 )
0 < n <= 5 000 ( Python: 1 000, LC: 500 )
```