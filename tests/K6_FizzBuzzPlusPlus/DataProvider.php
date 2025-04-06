<?php

namespace tests\K6_FizzBuzzPlusPlus;

class DataProvider
{
    public function data()
    {
        return [

            // Regular FizzBuzz
            [[[3, 5], ["fizz", "buzz"]], [1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz"], ],
            // FizzBuzz++
            [[[2, 3, 5], ["fizz", "buzz", "bazz"]], [1, 'fizz', 'buzz', 'fizz', 'bazz', 'fizzbuzz', 7, 'fizz', 'buzz', 'fizzbazz', 11, 'fizzbuzz', 13, 'fizz', 'buzzbazz', 'fizz', 17, 'fizzbuzz', 19, 'fizzbazz', 'buzz', 'fizz', 23, 'fizzbuzz', 'bazz', 'fizz', 'buzz', 'fizz', 29 , 'fizzbuzzbazz']],
        ];
    }
}