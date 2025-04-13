<?php

namespace tests\K7_NiceArray;

class DataProvider
{
    public function data()
    {
        return [
            [[0, 2, 19, 4, 4], false, ],
            [[3, 2, 1, 0], true, ],
            [[3, 2, 10, 4, 1, 6], false, ],
            [[1, 1, 8, 3, 1, 1], false, ],
            [[0, 1, 2, 3], true, ],
            [[1, 2, 3, 4], true, ],
            [[0, -1, 1], true, ],
            [[0, 2, 3], false, ],
            [[0], false, ],
            [[], false, ],
            [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], true, ],
            [[0, 1, 3, -2, 5, 4], false, ],
            [[0, -1, -2, -3, -4], true, ],
            [[1, -1, 3], false, ],
            [[1, -1, 2, -2, 3, -3, 6], false, ],
            [[2, 2, 3, 3, 3], true, ],
            [[1, 1, 1, 2, 1, 1], true, ],
            [[1, 2, 7, 8], true, ],
        ];
    }
}
