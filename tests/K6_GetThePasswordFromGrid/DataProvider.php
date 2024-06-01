<?php

namespace tests\K6_GetThePasswordFromGrid;

class DataProvider
{
    private $grid = [
        ["x", "l", "m"],
        ["o", "f", "c"],
        ["k", "i", "t"]
    ];

    private $dir = ["rightT", "down", "leftT", "right", "rightT", "down", "left", "leftT"];

    public function data()
    {
        return [
            [[$this->grid, $this->dir], 'lock'],
        ];
    }
}