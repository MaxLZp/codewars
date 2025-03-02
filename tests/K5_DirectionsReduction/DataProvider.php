<?php

namespace tests\K5_DirectionsReduction;

class DataProvider
{
    public function data()
    {
        return [
            [["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"], ["WEST"]],
            [["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH"], []],
            [["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH","NORTH"], ["NORTH"]],

            [["NORTH","EAST","NORTH","EAST","WEST","WEST","EAST","EAST","WEST","SOUTH",], ['NORTH', 'EAST']]
        ];
    }
}