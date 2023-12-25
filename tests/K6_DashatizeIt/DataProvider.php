<?php

namespace tests\K6_DashatizeIt;

class DataProvider
{
    public function data()
    {
        return [
            [ 274, '2-7-4',],
            [ 5311, '5-3-1-1',],
            [ 86320, '86-3-20',],
            [ 974302, '9-7-4-3-02',],
            [ 0, '0',],
            [-1, '1', ],
            [-28369, '28-3-6-9', ],
        ];
    }
}