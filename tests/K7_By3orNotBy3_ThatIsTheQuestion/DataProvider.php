<?php

namespace tests\K7_By3orNotBy3_ThatIsTheQuestion;

class DataProvider
{
    public function data()
    {
        return [
            ['123', true],
            ['19254', true],
            ['1', false],
            ['963210456', true],
            ['010110101011', false],
            ['9', true],
            ['6363', true],
            ['10987654321', false],
            ['9876543211234567890009', true],
            ['9876543211234567890002', false],
        ];
    }
}
