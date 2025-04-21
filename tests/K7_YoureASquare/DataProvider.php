<?php

namespace tests\K7_YoureASquare;

class DataProvider
{
    public function data()
    {
        return [
            [0, true],
            [4, true],
            [25, true],
            [-1, false],
            [3, false],
            [26, false],
            [46394627792150884, true],

        ];
    }
}
