<?php

namespace tests\K6_CountingDuplicates;

class DataProvider
{
    public function data()
    {
        return [
            ["", 0],
            ["abcde", 0],
            ["aabbcde", 2],
            ["aabBcde", 2],
            ["Indivisibility", 1],
            ["Indivisibilities", 2],
        ];
    }
}