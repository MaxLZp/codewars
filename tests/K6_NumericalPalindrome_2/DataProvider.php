<?php

namespace tests\K6_NumericalPalindrome_2;

class DataProvider
{
    public function data()
    {
        return [
            [2, false],
            [123322367, true],
            [1551, true],
            [13598, false],
            ["ACCDDCCA", "Not valid"],
            ["1551", "Not valid"],
            [-4505, "Not valid"],

            [136307, true],
            [859155, true],
        ];
    }
}