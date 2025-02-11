<?php

namespace tests\K7_SimpleStringReversal;

class DataProvider
{
    public function data()
    {
        return [
            ['codewars', 'srawedoc'],
            ['your code', 'edoc ruoy'],
            ['your code rocks', 'skco redo cruoy'],
            ['i love codewars', 's rawe docevoli'],

            [' test', ' tset'],
            ['test ', 'tset '],
        ];
    }
}
