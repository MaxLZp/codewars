<?php

namespace tests\K6_SimpleFun132_NumberOfCarries;

class DataProvider
{
    public function data()
    {
        return [
            [[543,3456], 0],
            [[1927,6426], 2],
            [[9999,1], 4],
            [[1234,5678], 2],
        ];
    }
}