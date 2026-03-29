<?php

namespace tests\K5_ProductOfConsecutiveFibNumbers;

class DataProvider
{
    public function data()
    {
        return [
            [4895, [55, 89, true]],
            [5895, [89, 144, false]],
            [74049690, [6765, 10946, true]],
        ];
    }
}