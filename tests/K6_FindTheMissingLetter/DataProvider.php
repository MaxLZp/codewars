<?php

namespace tests\K6_FindTheMissingLetter;

class DataProvider
{
    public function data()
    {
        return [
            [['a','b','c','d','f'], 'e'],
            [['O', 'Q', 'R', 'S'], 'P'],
        ];
    }
}