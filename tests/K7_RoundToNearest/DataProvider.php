<?php

namespace tests\K7_RoundToNearest;

class DataProvider
{
    public function data()
    {
        return [
            [[10, [1, 2, 4, 8, 16, 32]], [8]],
            [[-120, [-10, -20, -40, -80, -160, -320]], [-80, -160], ],
            [[1, [-32, 12, 8, -10, -2, 4]], [-2, 4], ],
            [[42, []], [], ],
        ];
    }
}
