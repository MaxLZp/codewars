<?php

namespace tests\K5_CountIPAddresses;

class DataProvider
{
    public function data()
    {
        return [
            [["150.0.0.0", "150.0.0.1"], 1],
            [["10.0.0.0", "10.0.0.50"], 50],
            [["20.0.0.10", "20.0.1.0"], 246],
        ];
    }
}