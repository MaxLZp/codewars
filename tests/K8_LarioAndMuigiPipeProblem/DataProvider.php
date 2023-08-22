<?php

namespace tests\K8_LarioAndMuigiPipeProblem;

class DataProvider
{
    public function data()
    {
        return [
            [[1,2,3,5,6,8,9],[1,2,3,4,5,6,7,8,9]],
            [[1,2,3,12],[1,2,3,4,5,6,7,8,9,10,11,12]],
            [[6,9],[6,7,8,9]],
            [[-1,4],[-1,0,1,2,3,4]],
            [[1,2,3],[1,2,3]],
            [[2],[2]]
        ];
    }
}
