<?php

namespace tests\K6_ClockyMcClockFace;

class DataProvider
{
    public function data()
    {
        return [
            [0, '12:00',],
            [90, '03:00',],
            [92, '03:04',],
            [171.00230049772, '05:42',],
            [180, '06:00',],
            [270, '09:00',],
            [360, '12:00',],
        ];
    }
}