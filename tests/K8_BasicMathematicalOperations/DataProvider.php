<?php

namespace tests\K8_BasicMathematicalOperations;

class DataProvider
{
    public function data()
    {
        return [
            [['+', 4, 7], 11],
            [['-', 15, 18], -3],
            [['*', 5, 5], 25],
            [['/', 49, 7], 7],
        ];
    }
}
