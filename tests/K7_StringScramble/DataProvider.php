<?php

namespace tests\K7_StringScramble;

class DataProvider
{
    public function data()
    {
        return [
            [['abcd',[0,3,1,2]], 'acdb'],
            [['sc301s', [4,0,3,1,5,2]], "c0s3s1"],
            [['bskl5', [2,1,4,3,0]], "5sblk"],
        ];
    }
}
