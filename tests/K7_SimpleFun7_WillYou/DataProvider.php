<?php

namespace tests\K7_SimpleFun7_WillYou;

class DataProvider
{
    public function data()
    {
        return [
            [[true, true, true], false],
            [[true, false, true], true],
            [[false, false, false], false],
            [[false, false, true], true],
        ];
    }
}
