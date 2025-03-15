<?php

namespace tests\K5_PickPeaks;

class DataProvider
{
    public function data()
    {
        return [
            [[1,2,3,6,4,1,2,3,2,1], ['pos' => [3,7], 'peaks' => [6,3]]],
        ];
    }
}