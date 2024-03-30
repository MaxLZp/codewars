<?php

namespace tests\K6_CalculateTheFunctionForASimpleLinearSequebce_medium;

class DataProvider
{
    public function data()
    {
        return [
            [[[0, 1, 2, 3, 4], 5, ], 5, ],
            [[[0, 3, 6, 9, 12], 10, ], 30, ],
            [[[1, 4, 7, 10, 13], 20, ], 61, ],
        ];
    }

    public function dataNonLinear()
    {
        return [
            [[[1, 2, 4, 7, 11], null ], "Non-linear sequence", ],
        ];
    }
}