<?php

namespace tests\K6_SortTheOdd;

class DataProvider
{
    public function data()
    {
        return [
            [[5, 3, 2, 8, 1, 4], [1, 3, 2, 8, 5, 4], ],
            [[5, 3, 1, 8, 0], [1, 3, 5, 8, 0], ],
            [[], []],
        ];
    }
}