<?php

namespace tests\K6_GolbachsConjecture;

class DataProvider
{

    public function data()
    {
        return [
            [2, []],
            [5, []],
            [4, [2, 2]],
            [6, [3, 3]],
            [14, [3, 11]],
        ];
    }
}