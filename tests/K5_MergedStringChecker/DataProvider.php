<?php

namespace tests\K5_MergedStringChecker;

class DataProvider
{
    public function data()
    {
        return [
            [['codewars', 'code', 'wars'], true],
            [['codewars', 'cdw', 'oears'], true],
            [['codewars', 'cod', 'wars'], false],

            [['codewars', 'code', 'code'], false],

            [['', 'no', 'siree'], false],
            [['', '', ''], true],

            [['codewars', 'code', 'warss'], false],

            [['Bananas from Bahamas', 'Bahas', 'Bananas from am'], true],
        ];
    }
}