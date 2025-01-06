<?php

namespace tests\K7_SimpleFun173_AHeroGoToTheSchool;

class DataProvider
{
    public function data()
    {
        return [
            [[["red","red","blue"], [true, true, true]], 0, ],
            [[["blue","blue","blue","red","red"], [false, true, true, true, false]], 3, ],
            [[["blue","red","red","red","blue","red","blue"], [true, false, false, false, true, true, false]], 5, ],
            [[["red","red","red","blue"], [false, false, false, true]], 3, ],
        ];
    }
}
