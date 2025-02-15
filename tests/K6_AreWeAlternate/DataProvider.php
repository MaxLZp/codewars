<?php

namespace tests\K6_AreWeAlternate;

class DataProvider
{
    public function data()
    {
        return [
            ["amazona", true],
            ["apple", false],
            ["banana", true],
            ["orange", false],
            ["helipad", true],
            ["yay", true],
        ];
    }
}