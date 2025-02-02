<?php

namespace tests\K6_SumOfNestedNumbers;

class DataProvider
{
    public function data()
    {
        return [
            [[1, [2], 3, [4, [5]]], 149],
        ];
    }
}