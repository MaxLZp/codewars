<?php

namespace tests\K6_ExclamationMarksSeries10;

class DataProvider
{
    public function data()
    {
        return [
            ["Hi!","Hi"],
            ["!Hi! Hi!", "!Hi! Hi"],
            ["!!Hi! !Hi!!", "!Hi! !Hi!"],
            ["!!!!Hi!! !!!!Hi !Hi!!!", "!!Hi!! Hi !Hi!"],
        ];
    }
}