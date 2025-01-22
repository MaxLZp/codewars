<?php

namespace tests\K7_AlphabeticalAddition;

class DataProvider
{
    public function data()
    {
        return [
            [['a', 'b', 'c'], 'f'],
            [['z'], 'z'],
            [['a', 'b'], 'c'],
            [['c'], 'c'],
            [['z', 'a'], 'a'],
            [['y', 'c', 'b'], 'd'],
            [[], 'z'],
        ];
    }
}
