<?php

namespace tests\K6_CircularySortedArray;

class DataProvider
{
    public function data()
    {
        return [
            [[2, 3, 4, 5, 6], true],
            [[6, 2, 3, 4, 5], true],
            [[3, 2, 4, 5, 6], false],   

            [[2, 3, 4, 3], false],    
        ];
    }

}