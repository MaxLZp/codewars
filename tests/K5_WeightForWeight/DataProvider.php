<?php

namespace tests\K5_WeightForWeight;

class DataProvider
{
    public function data()
    {
        return [
            ["103 123 4444 99 2000", "2000 103 123 4444 99"],
            ["2000 10003 1234000 44444444 9999 11 11 22 123", "11 11 2000 10003 22 123 1234000 44444444 9999"],
        ];
    }
}