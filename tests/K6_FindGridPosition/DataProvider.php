<?php

namespace tests\K6_FindGridPosition;

class DataProvider
{
    public function data()
    {
        return [
            // [[1, 1, ["x" => 0, "y" => 0]], '*'],
            // [[1, 5, ["x" => 0, "y" => 0]] , '*1111'],
            // [[4, 8, ["x" => 7, "y" => 3]], '00000001\n00000001\n00000001\n1111111*'],
            
            [[5, 8, ["x" => 3, "y" => 2]], '00010000\n00010000\n111*1111\n00010000\n00010000'],
        ];
    }
}