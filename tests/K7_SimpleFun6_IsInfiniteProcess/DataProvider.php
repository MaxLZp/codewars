<?php

namespace tests\K7_SimpleFun6_IsInfiniteProcess;

class DataProvider
{
    public function data()
    {
        return [
            [[2, 6], False],
            [[2, 3], True],
            [[2, 10], False],
            [[0, 1], True],
            [[3, 1], True],
            [[10, 10], False],
            [[5, 10], True],
        ];
    }
}
