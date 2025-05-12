<?php

namespace tests\K7_BitsBattle;

class DataProvider
{
    public function data()
    {
        return [
            [[5, 3, 14], 'odds win'],
            [[3, 8, 22, 15, 78], 'evens win'],
            [[], 'tie'],
            [[1, 13, 16], 'tie'],
        ];
    }
}
