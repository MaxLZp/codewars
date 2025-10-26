<?php

namespace tests\K6_KillerGarageDoors;

class DataProvider
{
    public function data()
    {
        return [
            ['', '',],
            ['P....' . str_repeat('.',10), '12345' . str_repeat('5',10),],
            ['P......P......', '12345554321000',],
            ['P.P..', '12222',],
            ['P.P.P....', '122234555',],
            ['P.O....', '1210000',],
            ['P..OP..P..', '1232222100',],
            ['..P...O.....', '001234321000',],

            ['.POPP.PP.P.....', '010111222345555'],

            ['..PPP...O.....P', '001123455555554'],
        ];
    }
}