<?php

namespace tests\K6_ValidBraces;

class DataProvider
{
    public function data()
    {
        return [
            ["()", true],
            ["[(])", false],

            ["(})", false],
        ];
    }
}