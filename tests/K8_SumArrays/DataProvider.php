<?php

namespace tests\K8_Sumarrays;

class DataProvider
{
    public function data()
    {
        return [
            [[1, 5.2, 4, 0, -1], 9.2],
            [[], 0],
            [[-2.398], -2.398],
        ];
    }
}
