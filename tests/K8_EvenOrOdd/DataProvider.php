<?php

namespace tests\K8_EvenOrOdd;

class DataProvider
{
    public function data()
    {
        return [
            [2, "Even"],
            [0, "Even"],
            [7, "Odd"],
            [1, "Odd"],
            [-1, "Odd"],
        ];
    }
}
