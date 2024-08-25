<?php

namespace tests\K7_WhichColorIsTheBrightest;

class DataProvider
{
    public function data()
    {
        return [
            [[ "#001000", "#000000" ], "#001000",],
            [[ "#ABCDEF", "#123456" ], "#ABCDEF",],
            [[ "#00FF00", "#FFFF00" ], "#00FF00",],
            [[ "#FFFFFF", "#1234FF" ], "#FFFFFF",],
            [[ "#FFFFFF", "#123456", "#000000" ], "#FFFFFF",],
        ];
    }
}