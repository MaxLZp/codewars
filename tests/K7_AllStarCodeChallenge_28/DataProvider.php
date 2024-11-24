<?php

namespace tests\K7_AllStarCodeChallenge_28;

class DataProvider
{
    public function data()
    {
        return [
            ['abcdef', true],
            ['++-', false],
            ['  nAa', false],
        ];
    }
}
