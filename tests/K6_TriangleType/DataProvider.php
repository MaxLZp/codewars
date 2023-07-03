<?php

namespace tests\K6_TriangleType;

class DataProvider
{
    public function data()
    {
        return [
            [[7, 3, 2], 0], // Not triangle
            [[2, 4, 6], 0], // Not triangle
            [[8, 5, 7], 1], // Acute
            [[3, 4, 5], 2], // Right
            [[7, 12, 8], 3], // Obtuse
        ];
    }
}