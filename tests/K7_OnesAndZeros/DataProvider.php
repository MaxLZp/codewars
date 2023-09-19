<?php

namespace tests\K7_OnesAndZeros;

class DataProvider
{
    public function data()
    {
        return [
            [[0,0,0,1], 1,],
            [[0,0,1,0], 2,],
            [[1,1,1,1], 15,],
            [[0,1,1,0], 6,],
        ];
    }
}
