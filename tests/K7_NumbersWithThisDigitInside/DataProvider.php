<?php

namespace tests\K7_NumbersWithThisDigitInside;

class DataProvider
{
    public function data()
    {
        return [
            [[5,6], [0, 0, 0]],
            [[7,6], [1, 6, 6]],
            [[11,1], [3, 22, 110]],
            [[20,0], [2, 30, 200]],
            [[44,4], [9, 286, 5955146588160]],
        ];
    }
}
