<?php

namespace tests\K6_ExclamationMarksSeries17;

class DataProvider
{
    public function data()
    {
        return [
            [["!!", "??"], "Right",],
            [["!??", "?!!"], "Left",],
            [["!?!!", "?!?"], "Left",],
            [["!!???!????", "??!!?!!!!!!!"], "Balance",],
        ];
    }
}