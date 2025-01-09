<?php

namespace tests\K7_PokerhandStraightOrNot;

class DataProvider
{
    public function data()
    {
        return [
            [[2, 3, 4 ,5, 6], true, "2, 3, 4 ,5, 6"],
            [[14, 5, 4 ,2, 3], true, "14, 5, 4 ,2, 3"],
            [[7, 7, 12 ,11, 3, 4, 14], false, "7, 7, 12 ,11, 3, 4, 14"],
            [[7, 3, 2], false, "7, 3, 2"],
        ];
    }
}
