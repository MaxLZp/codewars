<?php

namespace tests\K7_Thinkful_ListAndLoopDrills_InverseSlicer;

class DataProvider
{
    public function data()
    {
        return [
            [[[12, 14, 63, 72, 55, 24], 2, 4], [12, 14, 55, 24]],
            [[[12, 14, 63, 72, 55, 24], 0, 3], [72, 55, 24]],
            [[['Intuition', 'is', 'a', 'poor', 'guide', 'when', 'facing', 'probabilistic', 'evidence'], 5, 13], ['Intuition', 'is', 'a', 'poor', 'guide']],
        ];
    }
}