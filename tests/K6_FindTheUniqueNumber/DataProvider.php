<?php

namespace tests\K6_FindTheUniqueNumber;

class DataProvider
{
    public function data()
    {
        return [
            [[2, 1, 1], 2, ],
            [[1, 1, 1, 2, 1, 1], 2, ],
            [[0, 0, 0.55, 0, 0], 0.55,],
            [[0, 1, 0], 1, ],
            [[8,8,8,8,7], 7],
        ];
    }
}