<?php

namespace tests\K6_LotteryTicket;

class DataProvider
{
    public function data()
    {
        return [
            [[[['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2], "Loser!"],
            [[[['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1], "Winner!"],
            [[[['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3], "Loser!"],

            [
                [[
                    ['CXD', 76],
                    ['VIVZU', 85],
                    ['BRAJT', 72],
                    ['AGGAWJ', 71],
                    ['TA', 68],
                    ['NWMM', 68],
                    ['HA', 73],
                    ['VSP', 69],
                    ['SEXBZ', 67],
                    ['IN', 85],
                    ['JYO', 75],
                    ['WUIEH', 75],
                    ['OBXDW', 78],
                ], 2], "Winner!"
            ],
        ];
    }
}