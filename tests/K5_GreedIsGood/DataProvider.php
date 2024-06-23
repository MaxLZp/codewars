<?php

namespace tests\K5_GreedIsGood;

class DataProvider
{
    public function data()
    {
        return [
            'testValueShouldBeZero' => [[2, 3, 4, 6, 2], 0],
            'testTiplets' => [[4, 4, 4, 3, 3], 400,],
            'testMixed'=> [[2, 4, 4, 5, 4], 450, ],
            'testDoubleRoll'=> [[1, 1, 2, 3, 6], 200, ],
        ];
    }
}