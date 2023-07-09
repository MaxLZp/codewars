<?php

namespace tests\K7_HandsUp;

class DataProvider
{
    public function data()
    {
        return [
            [3, [0, 1, 0]],
            [5, [2, 1, 0]],
            [6, [0, 2, 0]],
            [7, [1, 2, 0]],
            [8, [2, 2, 0]],
            [9, [0, 0, 1]],
            [54, [0, 0, 0]],
            [98, [2, 2, 1]],
        ];
    }
}
