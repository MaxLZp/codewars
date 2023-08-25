<?php

namespace tests\K8_BinToDecimal;

class DataProvider
{
    public function data()
    {
        return [
            ["1", 1],
            ["0", 0],
            ["1001001", 73],
        ];
    }
}
