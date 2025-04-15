<?php

namespace tests\K7_ThinkingAndTesting_AandB;

class DataProvider
{
    public function data()
    {
        return [
            //a+b?
            [[0,1], 1,],
            [[1,2], 3,],
            [[10,20], 30,],
            //a*b?
            [[1,1], 1,],
            [[1,3], 3,],
        ];
    }
}