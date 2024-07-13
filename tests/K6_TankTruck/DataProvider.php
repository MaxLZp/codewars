<?php

namespace tests\K6_TankTruck;

class DataProvider
{
    public function data()
    {
        return [
            [[4, 8, 1000], 500],


            [[5, 7, 3848], 2940],

            [[2, 7, 3848], 907],
            [[2, 8, 5026], 982],
            [[4, 9, 6361], 2731],

            [[40, 120, 3500], 1021],
        ];
    }
}