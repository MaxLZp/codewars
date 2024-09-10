<?php

namespace tests\K7_SumOfAllArguments;

class DataProvider
{
    public function data()
    {
        return [
            [[1], 1],
            [[1, 2], 3],
            [[5, 7, 9], 21],
            [[12, 1, 1, 1, 1], 16],
            [[12, 1, 1, 1, 1, 1, 1], 18],
        ];
    }
}
