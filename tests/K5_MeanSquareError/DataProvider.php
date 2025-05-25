<?php

namespace tests\K5_MeanSquareError;

class DataProvider
{
    public function data()
    {
        return [
            [[[1, 2, 3], [4, 5, 6]], 9],
            [[[10, 20, 10, 2], [10, 25, 5, -2]], 16.5],
            [[[0, -1], [-1, 0]], 1],
        ];
    }
}