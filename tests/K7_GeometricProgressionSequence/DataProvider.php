<?php

namespace tests\K7_GeometricProgressionSequence;

class DataProvider
{
    public function data()
    {
        return [
            [[2, 3, 5], '2, 6, 18, 54, 162'],
            [[2, 2, 10], '2, 4, 8, 16, 32, 64, 128, 256, 512, 1024'],
            [[1, -2, 10], '1, -2, 4, -8, 16, -32, 64, -128, 256, -512'],
        ];
    }
}
