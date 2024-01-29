<?php

namespace tests\K7_WordValues;

class DataProvider
{
    public function data()
    {
        return [
            [["codewars", "abc", "xyz"], [88, 12, 225],],
            [["abc abc", "abc abc", "abc", "abc"], [12, 24, 18, 24], ],
        ];
    }
}