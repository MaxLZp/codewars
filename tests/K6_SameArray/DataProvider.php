<?php

namespace tests\K6_SameArray;

class DataProvider
{
    public function data()
    {
        return [
            // [$actual, $expected]
            [[[], []], true,],
            [[[[2,5], [3,6]], [[5,2], [3,6]]], true],
            [[[[2,5], [3,6]], [[6,3], [5,2]]], true],
            [[[[2,5], [3,6]], [[6,3], [2,5]]], true],
            [[[[2,5], [3,5], [6,2]], [[2,6], [5,3], [2,5]]], true],
            [[[[2,5], [3,5], [6,2]], [[3,5], [6,2], [5,2]]], true],

            [[[[2,5], [3,6]], [[2,3], [5,6]]], false],
        ];
    }
}