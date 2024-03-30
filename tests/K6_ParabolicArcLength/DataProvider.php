<?php

namespace tests\K6_ParabolicArcLength;

class DataProvider
{
    public function data()
    {
        return [
            [1, 1.414213562],
            [10, 1.478197397],
            [40, 1.478896272],
            [100000, 1.478942857],
        ];
    }
}