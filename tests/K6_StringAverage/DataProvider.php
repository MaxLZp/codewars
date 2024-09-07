<?php

namespace tests\K6_StringAverage;

class DataProvider
{
    public function data()
    {
        return [
            ["zero nine five two", "four"],
            ["four six two three", "three"],
            ["one two three four five", "three"],
            ["five four", "four"],
            ["zero zero zero zero zero", "zero"],
            ["one one eight one", "two"],
            ["", "n/a"],
        ];
    }
}