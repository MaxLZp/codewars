<?php

namespace tests\K7_FrequencySequence;

class DataProvider
{
    public function data()
    {
        return [
            [["hello world", "-"], "1-1-3-3-2-1-1-2-1-3-1",],
            [["19999999", ":"], "1:7:7:7:7:7:7:7",],
            [["^^^**$", "x"], "3x3x3x2x2x1",],
        ];
    }
}
