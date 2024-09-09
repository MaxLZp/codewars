# The reject() function
## 7 kyu

Implement a function which filters out array values which satisfy the given predicate.
```
reject([1, 2, 3, 4, 5, 6], function ($n) {return $n % 2 == 0;})  =>  [1, 3, 5]
```