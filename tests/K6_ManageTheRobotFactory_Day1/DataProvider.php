<?php

namespace tests\K6_ManageTheRobotFactory_Day1;

class DataProvider
{
    public function data()
    {
        return [
            [[[10], 90], 5000],
            [[[20, 10], 55], 3820],
            
            [[[10, 20, 30, 40, 50, 60, 70, 80, 90,], 25], 3444665],
            [[[71,  3,  42,  28,  24,  78,  34, ], 18], 69428],
        ];
    }
}