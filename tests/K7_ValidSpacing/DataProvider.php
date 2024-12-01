<?php

namespace tests\K7_ValidSpacing;

class DataProvider
{
    public function data()
    {
        return [
            ["Hello world", true, ],
            [" Hello world", false, ],
            ["Hello world ", false, ],
            ["Hello", true, ],
            ["Helloworld", true, ],
        ];
    }
}
