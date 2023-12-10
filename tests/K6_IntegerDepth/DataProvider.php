<?php

namespace tests\K6_IntegerDepth;

class DataProvider
{
    public function data()
    {
        return [
            [42,  9,],
            [1, 10,],
            [125, 72,],
            [1234567890,  1,],
        ];
    }
}