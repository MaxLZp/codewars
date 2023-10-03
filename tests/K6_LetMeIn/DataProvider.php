<?php

namespace tests\K6_LetMeIn;

class DataProvider
{
    public function data()
    {
        return [
            [[1, 1, 3, 2, 0], 3],
            [[0, 8, 2, 1, 4, 2, 12, 3, 2], 6],
            [[2, 3, 1, 4, 5, 2, 1, 0, 8, 5, 6, 1], 10],
            [[12, 3, 19, 14, 1, 19, 16, 4, 0, 1], 3],
            [[13, 20, 3, 3, 14, 5, 13, 0, 8, 5], 8],
            [[16, 4, 3, 0, 1, 3, 7, 3, 10, 1], 6],
            [[1, 1, 1, 3, 3, 8, 3, 14, 3, 0], 10],
            [[0], 1],
            [[0,6,1,9,1,1,2], 5],
            [[16,0,6,6,13,7,6,2], 3],
            [[0,2], 2],
            [[0,18,3,6,3,10,15,6,1,8], 10],
            [[19,8,13,3,19,16,1,9,0,1], 3],
            [[0,8,5,6,5,10,2,1,5], 8],
            [[0,9,13,17,9,10,2,3,1], 8],
        ];
    }
}