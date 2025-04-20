<?php

namespace tests\K7_LooseChange;

class DataProvider
{
    public function data()
    {
        return [
            ['dime penny dollar', '$1.11'],
            ['dime penny nickel', '$0.16'],
            ['dollar quarter dime dime nickel quarter quarter', '$2.00'],
            ['quarter quarter', '$0.50'],
            ['dollar penny dollar', '$2.01'],
            ['dollar dollar dollar dollar dollar dollar dollar dollar dollar dollar penny', '$10.01'],
        ];
    }
}
