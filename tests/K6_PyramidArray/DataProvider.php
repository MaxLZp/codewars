<?php

namespace tests\K6_PyramidArray;

class DataProvider
{
    public function data()
    {
        return [
            [0, []],
            [1, [[1]]],
            [2, [[1], [1, 1]]],
            [3, [[1], [1, 1], [1, 1, 1]]],
        ];
    }
}