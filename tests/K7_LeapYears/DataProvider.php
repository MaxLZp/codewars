<?php

namespace tests\K7_LeapYears;

class DataProvider
{
    public function data()
    {
        return [
            [2016, true],
            [2000, true],
            [2100, false],
            [1900, false],
        ];
    }
}
