<?php

namespace tests\K6_CalculateAreaOfPolygonInsideACircle;

class DataProvider
{
    public function data()
    {
        return [
            [[3, 3], 11.691,],
            [[2, 4], 8.000],
            [[2.5, 5], 14.860],
        ];
    }
}