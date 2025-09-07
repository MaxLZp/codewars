<?php

namespace tests\K6_ArrayDeepCount;

class DataProvider
{
    public function data()
    {
        return [
            [[], 0],
            [[1, 2, 3], 3],
            [["x", "y", ["z"]], 4],
            [[1, 2, [3, 4, [5]]], 7],
            [[[[[[[[[[]]]]]]]]], 8],
        ];
    }
}