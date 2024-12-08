<?php

namespace tests\K7_FindTwins;

class DataProvider
{
    public function data()
    {
        return [
            [[1, 5, 87, 45, 8, 8], 8],
            [[1, 5, 4, 4], 4],
            [[1, 5, 4], null],
            [[1, 1, 115, 4543, 1176], 1],
            [[], null],
        ];
    }
}
