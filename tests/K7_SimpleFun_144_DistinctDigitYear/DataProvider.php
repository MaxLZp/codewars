<?php

namespace tests\K7_SimpleFun_144_DistinctDigitYear;

class DataProvider
{
    public function data()
    {
        return [
            [1001, 1023],
            [1123, 1203],
            [2001, 2013],
            [2334, 2340],
            [3331, 3401],
            [1987, 2013],
            [5555, 5601],
            [7712, 7801],
            [8088, 8091],
            [8999, 9012],
        ];
    }
}
