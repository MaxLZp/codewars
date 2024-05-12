<?php

namespace tests\K6_ArrayDiff;

class DataProvider
{
    public function data()
    {
        return [
            [[[1,2], [1]],[2],],
            [[[1,2,2], [1]],[2,2],],
            [[[1,2,2], [2]],[1],],
            [[[1,2,2], []],[1,2,2],],
            [[[], [1,2]],[],],
            [[[1, 2, 3], [1,2]],[3],],
        ];
    }
}