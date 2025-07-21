<?php

namespace tests\K6_HiddenCubicNumbers;

class DataProvider
{
    public function data()
    {
        return [
            ["0 9026315 -827&()", "0 0 Lucky"],
            ["Once upon a midnight dreary, while100 I pondered, 9026315weak and weary -827&()", "Unlucky"],
            ["&z371 upon 407298a --- dreary, ###100.153 I thought, 9926315strong and weary -127&() 1", "371 407 153 1 932 Lucky"],
        ];
    }
}