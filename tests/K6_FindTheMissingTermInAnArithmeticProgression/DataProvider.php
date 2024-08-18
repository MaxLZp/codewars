<?php

namespace tests\K6_FindTheMissingTermInAnArithmeticProgression;

class DataProvider
{
    public function data()
    {
        return [
            [[1, 2, 3, 5], 4],
            [[1, 3, 5, 9, 11], 7],
            [[100, 200, 300, 500], 400],
        ];
    }
}