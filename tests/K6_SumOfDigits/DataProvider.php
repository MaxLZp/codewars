<?php

namespace tests\K6_SumOfDigits;

class DataProvider
{
    public function data()
    {
        return [
            [16, 7],
            [195, 6],
            [992, 2],
            [999999999999, 9],
            [167346, 9],
            [10, 1],
            [0, 0]
        ];
    }
}