<?php

namespace tests\K7_HighestPowerOf2ThatEvenlyDividesANumber;

class DataProvider
{
    public function data()
    {
        return [
            [123, 1],
            [192, 64],
            [132232, 8],
            [64, 64],
        ];
    }
}
