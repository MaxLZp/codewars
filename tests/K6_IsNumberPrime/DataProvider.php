<?php

namespace tests\K6_IsNumberPrime;

class DataProvider
{
    public function data()
    {
        return [
            [0, false],
            [1, false],
            [2, true],
            [5, true],
        ];
    }
}