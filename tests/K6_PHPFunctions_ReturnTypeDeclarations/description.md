# PHP Functions - Return Type Declarations
## 6 kyu

### PHP Functions - Return Type Declarations

#### About this Kata Series

"PHP Functions" is a Kata Series authored by donaldsebleung which focuses on the perks and interesting features of PHP functions. It is un-numbered which means that the Kata in this Series is not progressive - one kata in this Series does not necessarily depend on another. This means that as long as you know how to write "Hello World" level programs in PHP, you will probably find any Kata in this Series easy to pick up and complete.

There is, however, one main prerequisite. You must be sufficiently familiar with primitive data types in PHP (strings, booleans, floats, integers) and what they mean. You must also have a basic understanding of how to define a simple function in PHP that may or may not receive a fixed number of arguments. A good indicator that you are ready for any Kata in this Series is if you are able to complete Multiply (8kyu) in PHP without looking at external resources in the process. If you are unable to complete that Kata without researching PHP function syntax then you may have to practice with basic PHP functions until you are familiar with them before continuing on this Kata series.

Certain Kata in this Series may have additional prerequisites. If that is the case, the extra prerequisites will be listed under a Level 2 Heading called Prerequisites in said Kata. Additionally, if a certain Kata in this Series requires a thorough understanding of PHP, the kata may be labelled as [Advanced].

#### Lesson

By default, PHP Functions can return any type of value they wish. For example, let's say we have a function add() which accepts two numbers as arguments and somehow computes the sum of the two numbers somewhere in the function. Of course, the most natural and straightforward implementation would be for the add() function to simply return the sum of the two numbers, which is either an integer or a float depending on the inputs:
```
function add($a, $b) {
  return $a + $b;
}
```

However, in some cases, we may not want the function to simply return the sum of the two numbers. Sometimes, we may want the add() function to print the sum of the two numbers to the screen instead:
```
function add($a, $b) {
  echo $a + $b;
}
```

Then, in this case, the value returned by the add() function would be NULL (by default) instead of an integer or float!

And then sometimes, we may want the add() function to return a string representation of the sum of the two numbers instead:
```
function add($a, $b) {
  return strval($a + $b);
}
```

The point is, by default, it is very hard to be certain exactly what data type a function will return just by looking at its declaration. For example, when we see the function declaration add($a, $b) we can guess that add() probably receives two integers or floats and returns an integer or float but it could as likely return a string of the form "$a + $b equals " . ($a + $b).

Fortunately, as of PHP 7, it is possible to declare a specific return type for a function or method. Using the example above, if we want our add() function to return an integer, we could type the following:
```
function add($a, $b): int {
  return $a + $b;
}
```

As seen above, the exact syntax for declaring the return type for a function is by adding a colon : followed by the name of the return type right before the opening curly braces {. Below are a few more examples to familiarise yourself with the syntax:
```
function say_hello(): string {
  // This function receives no arguments and returns a string
  return "Hello World";
}

function get_one_two_three(): array {
  // This function receives no arguments and returns an array
  return array(1, 2, 3);
}

function multiply($a, $b): float {
  // This function receives two numbers and returns a float (even if both inputs are integers)
  return $a * $b;
}
```

PHP supports the following return type declarations:

- int for Integer
- float for Float
- bool for Boolean
- string for String
- array for Array (you will not be expected to deal with arrays for the Task in this Kata)
- object for any Object (you will not be expected to deal with objects in this Kata)
If a function is expected to return an instance of a particular class, the name of the class is used in the declaration, e.g. if a function is expected to return an instance of Person then the return type declaration would look something like function ```my_function(/* arguments */): Person {/* code here */}```. You will NOT be expected to deal with classes or instances of classes in this Kata.

At this point, you may have wondered - what would happen if the actual return type of the function does not match the declared one? In the default weak mode in PHP, if the actual return value of a function does not match the type declared, PHP will attempt to coerce the returned value into the correct type and will only throw a TypeError if it is not possible. For example, in the add() function below, it is declared to return a string but the actual return type is a number:
```
function add($a, $b): string {
  return $a + $b;
}

add(1, 2); // string("3")
add(43, 58); // string("101")
add(-2, -5); // string("-7")
```

This would result in PHP implicitly converting the number into a string before returning it. Sometimes, value coercion is not possible (such as dealing with objects which are instances of different classes); in that case a TypeError will be thrown.

However, in strong mode (you will not have to deal with Strong Mode in this Kata), any return type that does not exactly match the declared return type would throw a TypeError:
```
// Declaring Strong Mode (knowledge not required for this Kata)
declare(strict_types=1);

function add($a, $b): int {
  return $a + $b;
}

add(1, 2); // int(3)
add(3, 4); // int(7)
add(3.5, 4.1); // A TypeError is thrown since 7.6 is a float, not an integer
```

#### Task

Note: The lesson provided in this Kata is designed to teach you most, if not all, of the key concepts required to complete the Task in this Kata. However, if in doubt, you are strongly encouraged to conduct your own research.

This Kata will be executed in default (weak) mode since it is currently impossible to declare strong mode in PHP on Codewars.

Declare, define and implement the following functions as instructed:

- hcf - This function should receive two arguments, which are both expected to be non-negative integers (but no type checking is required on your part), and return the Highest Common Factor (HCF) of 2 - the two numbers as an integer which should be declared in the function definition itself.
- lcm - This function should receive two arguments, both of which are expected to be non-negative integers (but type checking is not required) and return the Lowest Common Multiple (LCM) of the two numbers as a string which should be declared in the function definition itself. You may either explicitly convert the return value into a string inside your function or rely on implicit coercing.
