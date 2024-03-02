<?php

namespace tests\K6_PlayingWithDigits;

class DataProvider
{
    public function data()
    {
        return [
            [[89, 1], 1, ],
            [[92, 1], -1, ],
            [[46288, 3], 51, ],
        ];
    }
}