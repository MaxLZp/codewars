<?php

namespace tests\K6_PairOfGloves;

class DataProvider
{
    public function data()
    {
        return [
            [['red','red'], 1],
            [['red','green','blue'], 0],
            [['gray','black','purple','purple','gray','black'], 3],
        ];
    }
}