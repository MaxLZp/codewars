<?php

namespace tests\K7_HowManyUrinalsAreFree;

class DataProvider
{
    public function data()
    {
        return [
            ["10001", 1],
            ["1001", 0],
            ["00000", 3],
            ["0000", 2],
            ["01000", 1],
            ["00010", 1],
            ["10000", 2],
            ["100000", 2],
            ["1000000", 3],
            ["1", 0],
            ["0", 1],
            ["10", 0],
            ["110", -1],
            ["10110001", -1],
        ];
    }
}
