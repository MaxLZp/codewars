<?php

namespace tests\K5_RGBToHexConversion;

class DataProvider
{
    public function data()
    {
        return [
            [[255, 255, 255], "FFFFFF"],
            [[255, 255, 300], "FFFFFF"],
            [[0, 0, 0], "000000"],
            [[-500, 0, 0], "000000"],
            [[148, 0, 211], "9400D3"],
        ];
    }
}