<?php

namespace tests\K6_CreatePhoneNumber;

class DataProvider
{
    public function data()
    {
        return [
             [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], '(123) 456-7890',],
             [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], '(111) 111-1111',],
        ];
    }
}