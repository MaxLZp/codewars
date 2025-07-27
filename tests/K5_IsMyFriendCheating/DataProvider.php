<?php

namespace tests\K5_IsMyFriendCheating;

class DataProvider
{
    public function data()
    {
        return [
            [100, []],
            [101, [[55, 91], [91, 55]]],
            [102, [[70, 73], [73, 70]]],
            [110, [[70, 85], [85, 70]]],
            [1006, [[546, 925], [925, 546]]],
        ];
    }
}