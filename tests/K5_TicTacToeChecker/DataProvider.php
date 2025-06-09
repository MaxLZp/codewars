<?php

namespace tests\K5_TicTacToeChecker;

class DataProvider
{
    public function data()
    {
        return [
            [[
                [0, 0, 1],
                [0, 1, 2],
                [2, 1, 0]
            ], -1],
            [[
                [2, 1, 1],
                [0, 1, 0],
                [2, 2, 2]
            ], 2],
        ];
    }
}