<?php

namespace tests\K6_UniqueInOrder;

class DataProvider
{
    public function data()
    {
        return [
            ['AAAABBBCCDAABBB', ['A','B','C','D','A','B']],
            [[], []],
            ['', []],
        ];
    }
}