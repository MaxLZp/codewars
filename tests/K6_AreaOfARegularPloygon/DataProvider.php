<?php

namespace tests\K6_AreaOfARegularPloygon;

class DataProvider
{
    public function data()
    {
        return [
            ['4 sides of 5 cm each', '25.00 sq.cm'],
            ['4 sides of 5 cm', 'Invalid input'],
        ];
    }
}