<?php

namespace tests\K6_BowlingPins;

class DataProvider
{
    public function data()
    {
        return [
            [[2, 3], "I I I I\n I I I \n       \n   I   ", ],
            [[1, 2, 10], "I I I  \n I I I \n    I  \n       ", ],
            [[], "I I I I\n I I I \n  I I  \n   I   ", ],
        ];
    }
}