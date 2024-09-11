<?php

namespace tests\K7_Incrementer;

class DataProvider
{
    public function data()
    {
        return [
            [[], []],
            [[1, 2, 3], [2, 4, 6]],
            [[4, 6, 7, 1, 3], [5, 8, 0, 5, 8]],
            [[3, 6, 9, 8, 9], [4, 8, 2, 2, 4]],
            [[1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8], [2, 4, 6, 8, 0, 2, 4, 6, 8, 9, 0, 1, 2, 2]],
        ];
    }
}
