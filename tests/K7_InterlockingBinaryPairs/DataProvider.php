<?php

namespace tests\K7_InterlockingBinaryPairs;

class DataProvider
{
    public function data()
    {
        return [
            [[9, 4,],  true],
            [[3, 6,], false],
            [[2, 5,],  true],
            [[7, 1,], false],
            [[0, 8,],  true],
        ];
    }
}
