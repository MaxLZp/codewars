<?php

namespace tests\K6_RectangleIntoSquares;

class DataProvider
{
    public function data()
    {
        return [
            [[5, 5], null],
            [[5, 3], [3, 2, 1, 1]],
            [[3, 5], [3, 2, 1, 1]],
            [[20, 14], [14, 6, 6, 2, 2, 2]],
        ];
    }
}