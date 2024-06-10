<?php

namespace tests\K6_BitCounting;

class DataProvider
{
    public function data()
    {
        return [
            [0, 0],
            [4, 1],
            [7, 3],
            [9, 2],
            [10, 2],
        ];
    }
}