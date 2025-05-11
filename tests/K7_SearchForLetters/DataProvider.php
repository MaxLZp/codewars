<?php

namespace tests\K7_SearchForLetters;

class DataProvider
{
    public function data()
    {
        return [
            ["a **&  bZ", "11000000000000000000000001",],
            ["Abc e  $$  z", "11101000000000000000000001",],
            ["!!a$%&RgTT", "10000010000000000101000000",],
            ["abcdefghijklmnopqrstuvwxyz", "11111111111111111111111111",],
            ["aaaaaaaaaaa", "10000000000000000000000000",],
            ["&%&%/$%$%$%$%GYtf67fg34678hgfdyd", "00010111000000000001000010",],
        ];
    }
}
