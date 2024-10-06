<?php

namespace tests\K6_GroupedByCommas;

class DataProvider
{
    public function data()
    {
        return [
            [1, '1'],
            [10, '10'],
            [100, '100'],
            [1000, '1,000'],
            [10000, '10,000'],
            [100000, '100,000'],
            [1000000, '1,000,000'],
            [35235235, '35,235,235'],
        ];
    }
}