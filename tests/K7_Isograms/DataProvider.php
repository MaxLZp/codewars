<?php

namespace tests\K7_Isograms;

class DataProvider
{
    public function data()
    {
        return [
            ["Dermatoglyphics", true],
            ["isogram", true],
            ["aba", false],
            ["moOse", false],
            ["isIsogram", false],
            ["", true],
        ];
    }
}
