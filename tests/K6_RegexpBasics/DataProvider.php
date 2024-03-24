<?php

namespace tests\K6_RegexpBasics;

class DataProvider
{
    public function data()
    {
        return [
            ["", False, ],
            ["127.0.0.1", True, ],
            ["0.0.0.0", True, ],
            ["255.255.255.255", True, ],
            ["10.20.30.40", True, ],
            ["10.256.30.40", False, ],
            ["10.20.030.40", False, ],
            ["127.0.1", False, ],
            ["127.0.0.0.1", False, ],
            ["..255.255", False, ],
            ["127.0.0.1\n", False, ],
            ["\n127.0.0.1", False, ],
            [" 127.0.0.1", False, ],
            ["127.0.0.1 ", False, ],
            [" 127.0.0.1 ", False, ],
            ["251.139.15.0", true, ],
        ];
    }
}