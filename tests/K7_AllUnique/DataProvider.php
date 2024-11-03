<?php

namespace tests\K7_AllUnique;

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
