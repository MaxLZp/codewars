<?php

namespace tests\K6_GoodWords;

class DataProvider
{

    public function data()
    {
        return [
            ["Jako#One#Zone", true, ],
            ["MKO", true, ],
            ["5n3Y", true, ],
            ["*793#", true, ],
            [" 0tZd1hJ", true, ],
            ["123654789#0*", true, ],
            ["Jake", false, ],
            ["This", false, ],
            ["*8#", false, ],
            ["1234567890*#", false, ],
        ];
    }
}