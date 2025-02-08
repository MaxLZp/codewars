<?php

namespace tests\K6_ShortestDistanceToACharacter;

class DataProvider
{
    public function data()
    {
        return [
            [["lovecodewars","e"], [ 3, 2, 1, 0, 1, 2, 1, 0, 1, 2, 3, 4 ],],
            [["aaaaa","a"], [ 0, 0, 0, 0, 0 ],],
            [["aabbaabb","a"], [ 0, 0, 1, 1, 0, 0, 1, 2 ],],
            [["aaaabbbb","b"], [ 4, 3, 2, 1, 0, 0, 0, 0 ],],
            [["aaaaa","b"], [],],
            [["lovecoding",""], [],],
            [["",""], [],],
        ];
    }
}