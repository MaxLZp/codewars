<?php

namespace tests\K7_AddgingWords_PartI;

class DataProvider
{
    public function data()
    {
        return [
            [["three", "seven"], "ten"],
            [["three", "eight"], "eleven"],
            [["three", "zero"], "three"],
        ];
    }
}
