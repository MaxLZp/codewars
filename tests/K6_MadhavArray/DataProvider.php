<?php

namespace tests\K6_MadhavArray;

class DataProvider
{
    public function data()
    {
        return [
            [[2, 1, 1], true],
            [[2, 1, 1, 4, -1, -1], true],

            [[6, 2, 4, 2, 2, 2, 1, 5, 0, 0], true],
            [[2, -3, 5, 1, 0, 1, 2, 0, 0, 0], true],


            [[3, 1, 2, 3, 0], false],
        ];
    }
}