<?php

namespace tests\K5_NotVerySecure;

class DataProvider
{
    public function data()
    {
        return [
            ['Mazinkaiser', true],
            ['hello world_', false],
            ['PassW0rd', true],
            ['     ', false],
            ['', false],
        ];
    }
}