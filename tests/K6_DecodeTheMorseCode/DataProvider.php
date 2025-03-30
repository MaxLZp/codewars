<?php

namespace tests\K6_DecodeTheMorseCode;

class DataProvider
{
    public function data()
    {
        return [
            ['.... . -.--   .--- ..- -.. .', 'HEY JUDE'],

            [' . ', 'E'],
        ];
    }
}