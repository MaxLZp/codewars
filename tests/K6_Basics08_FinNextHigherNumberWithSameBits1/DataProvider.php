<?php

namespace tests\K6_Basics08_FinNextHigherNumberWithSameBits1;

class DataProvider
{
    public function data()
    {
        return [
            [128, 256,],
            [1, 2,],
            [127, 191,],

            [1022, 1279,],
            [1253343, 1253359,],
        ];
    }

}
