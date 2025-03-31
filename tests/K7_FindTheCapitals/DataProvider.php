<?php

namespace tests\K7_FindTheCapitals;

class DataProvider
{
    public function data()
    {
        return [
            ['CodEWaRs', [0,3,4,6]],
            ['aAbB' ,[1,3]],
            ['AAA', [0,1,2]],
            ['', []],
        ];
    }
}
