<?php

namespace tests\K7_ExesAndOhs;

class DataProvider
{
    public function data()
    {
        return [
            ['xo', true],
            ['XO', true],
            ['xo0', true],
            ['xxxoo', false],
            ["xxOo", true],
        ];
    }
}
