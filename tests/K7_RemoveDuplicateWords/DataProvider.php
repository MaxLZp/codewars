<?php

namespace tests\K7_RemoveDuplicateWords;

class DataProvider
{
    public function data()
    {
        return [
            ['alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta', 'alpha beta gamma delta'],
        ];
    }
}
