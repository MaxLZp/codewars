<?php

namespace tests\K7_TwoNumbersArePositive;

class DataProvider
{
    public function data()
    {
        return [
            [[2, 4, -3], true],
            [[-4, 6, 8], true],
            [[4, -6, 9], true],
            [[-4, 6, 0], false],
            [[4, 6, 10], false],
            [[-14, -3, -4], false],
        ];
    }
}
