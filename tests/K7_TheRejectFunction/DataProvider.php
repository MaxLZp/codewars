<?php

namespace tests\K7_TheRejectFunction;

class DataProvider
{
    public function data()
    {
        return [
            [[[1, 2, 3, 4, 5, 6], function ($n) {return $n % 2 == 0;}], [1, 3, 5]],
        ];
    }
}