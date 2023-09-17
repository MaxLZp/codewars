<?php

namespace tests\K6_MaximumSumValueOfRanges_SimpleVersion;

class DataProvider
{
    public function data()
    {
        return [
            [[[1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 3], [0, 4], [6, 8]]], 6,],
            [[[1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 3]]], 5,],
            [[[1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 4], [2, 5]]], 0,],
        ];
    }
}