<?php

namespace tests\K6_IPvalidation;

class DataProvider
{
    public function invalid()
    {
        return [
            [''],
            ['abc.def.ghi.jkl'],
            ['123.456.789.0'],
            [' 1.2.3.4'],
            ['03.45.20.1'],
            ['192.168.00.3]'],
        ];
    }

    public function valid()
    {
        return [
            ['0.0.0.0'],
            ['255.255.255.255'],
            ['238.46.26.43'],
            ['0.34.82.53'],
            ['1.2.3.4'],
        ];
    }
}