<?php

namespace tests\K8_BeginnerSeries1_SchoolPaperwork;

class DataProvider
{
    public function data()
    {
        return [
            [[5, 5], 25],
            [[-5, 5],  0],
            [[5, -5],  0],
            [[-5, -5], 0],
            [[5, 0], 0],
        ];
    }
}
