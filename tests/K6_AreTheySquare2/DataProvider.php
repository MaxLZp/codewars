<?php

namespace tests\K6_AreTheySquare2;

class DataProvider
{
    public function data()
    {
        return [
            [[1, 4, 9, 16, 25, 36], true],
            [[1, 2, 3, 4, 5, 6], false],
            [[1, [4], [9, 16, 25], [36, 49, [64, 81]], [100, [121, 144, [169]]], [196, [225, [256, 289, [324, [361, 400]]]]]], true],
        ];
    }
}