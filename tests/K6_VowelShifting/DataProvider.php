<?php

namespace tests\K6_VowelShifting;

class DataProvider
{
    public function data()
    {
        return [
            [["This is a test!", 0], "This is a test!"],
            [["This is a test!", 1], "Thes is i tast!"],
            [["This is a test!", 3], "This as e tist!"],

            [["This is a test!", -1], "This as e tist!"],
        ];
    }
}