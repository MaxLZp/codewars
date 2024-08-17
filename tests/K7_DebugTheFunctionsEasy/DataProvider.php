<?php

namespace tests\K7_DebugTheFunctionsEasy;

class DataProvider
{
    public function multi()
    {
        return [
            [[5, 1, 5], 25,],
        ];
    }
    public function add()
    {
        return [
            [[9, 8, 5], 22,],
        ];
    }
    public function reverse()
    {
        return [
            ["Hello World!", "!dlroW olleH",],
        ];
    }
}
