<?php

namespace tests\K7_nSmallest;

class DataProvider
{
    public function data()
    {
        return [
            [[3, 1, 2], 2, 2],
            [[15, 20, 7, 10, 4, 3], 3, 7],
            [[-5, -1, -6, -18], 4, -1],
            [[-102, -16, -1, -2, -367, -9], 5, -2],
            [[2, 169, 13, -5, 0, -1], 4, 2],
        ];
    }
}
