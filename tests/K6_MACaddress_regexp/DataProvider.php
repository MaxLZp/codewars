<?php

namespace tests\K6_MACaddress_regexp;

class DataProvider
{
    private $maze =
    [[1,1,1,1,1,1,1],
    [1,0,0,0,0,0,3],
    [1,0,1,0,1,0,1],
    [0,0,1,0,0,0,1],
    [1,0,1,0,1,0,1],
    [1,0,0,0,0,0,1],
    [1,2,1,0,1,0,1]];

    public function data()
    {
        return [
            [[$this->maze,["N","N","N","N","N","E","E","E","E","E"]], "Finish",],
            [[$this->maze,["N","N","N","N","N","E","E","S","S","E","E","N","N","E"]], "Finish",],
            [[$this->maze,["N","N","N","N","N","E","E","E","E","E","W","W"]], "Finish",],
            [[$this->maze,["N","N","N","W","W"]], "Dead",],
            [[$this->maze,["N","N","N","N","N","E","E","S","S","S","S","S","S"]], "Dead",],
            [[$this->maze,["N","E","E","E","E"]], "Lost",],
        ];
    }
}