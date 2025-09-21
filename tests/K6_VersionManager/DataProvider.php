<?php

namespace tests\K6_VersionManager;

class DataProvider
{
    public function data()
    {
        return [
            [null, "0.0.1"],
            ["", "0.0.1"],
            ["1.2.3", "1.2.3"],
            ["1.2.3.4", "1.2.3"],
            ["1.2.3.d", "1.2.3"],
            ["1", "1.0.0"],
            ["1.1", "1.1.0"],
        ];
    }
}