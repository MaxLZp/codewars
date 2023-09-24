<?php

namespace tests\K6_WorldBitsWar;

class DataProvider
{
    public function data()
    {
        return [
            [[1,5,12], "odds win", ],
            [[7,-3,20], "evens win", ],
            [[7,-3,-2,6], "tie", ],
            [[-3,-5], "evens win", ],
            [[], "tie", ],
        ];
    }
}