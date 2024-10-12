<?php

namespace tests\K6_ReverseOrRotate;

class DataProvider
{
    public function data()
    {
        return [
            [["1234", 0], ""],
            [["733049910872815764", 5], "330479108928157"],
            [["73304991087281576455176044327690580265896", 8], "1994033775182780067155464327690480265895"],
        ];
    }
}