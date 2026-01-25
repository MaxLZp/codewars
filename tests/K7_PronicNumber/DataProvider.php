<?php

namespace tests\K7_PronicNumber;

class DataProvider
{
    public function data()
    {
        return [
            [0, true],
            [1, false],
            [2, true],
            [3, false],
            [4, false],
            [5, false],
            [6, true],
            [-3, false],
            [-27, false],
        ];
    }
}
