<?php

namespace tests\K7_TailSwap;

class DataProvider
{
    public function data()
    {
        return [
            [["abc:123", "cde:456"], ["abc:456", "cde:123"]],
            [["a:12345", "777:xyz"], ["a:xyz", "777:12345"]],
        ];
    }
}
