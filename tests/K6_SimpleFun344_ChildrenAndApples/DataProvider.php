<?php

namespace tests\K6_SimpleFun344_ChildrenAndApples;

class DataProvider
{
    public function data()
    {
        return [
            [[7, 15, 9, 5], 3],
            [[7, 7, 7, 7], 0],
            [[7, 6, 7, 8], false],
            [[7, 7, 7, 5], false],
            [[7, 7, 7, 4], false],
            [[7, 7, 7, 3], false],
        ];
    }
}