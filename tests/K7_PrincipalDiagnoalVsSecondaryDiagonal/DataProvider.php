<?php

namespace tests\K7_PrincipalDiagnoalVsSecondaryDiagonal;

class DataProvider
{
    public function data()
    {
        return [
            [[
            [2,2,2],
            [4,2,6],
            [8,8,2] ], 'Secondary Diagonal win!'],


            [[
            [2,2,2],
            [4,2,6],
            [1,8,2] ], 'Principal Diagonal win!'],

            [[
            [1,2,3],
            [4,5,6],
            [7,8,9] ], 'Draw!'],
        ];
    }
}
