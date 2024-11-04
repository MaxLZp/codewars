<?php

namespace tests\K7_FixStringCase;

class DataProvider
{
    public function data()
    {
        return [
            ["code", "code"],
            ["CODe", "CODE"],
            ["COde", "code"],
            ["Code", "code"],
        ];
    }
}
