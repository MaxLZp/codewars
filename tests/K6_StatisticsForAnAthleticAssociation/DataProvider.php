<?php

namespace tests\K6_StatisticsForAnAthleticAssociation;

class DataProvider
{
    public function data()
    {
        return [
            [
                "01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17",
                "Range: 01|01|18 Average: 01|38|05 Median: 01|32|34",
            ],
            [
                "02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41",
                "Range: 00|31|17 Average: 02|26|18 Median: 02|22|00",
            ],
            [
                "02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|32|34, 2|17|17",
                "Range: 00|31|17 Average: 02|27|10 Median: 02|24|57",
            ],
            [
                "2|32|34, 11|15|17, 02|15|59, 13|19|34, 1|16|16, 1|15|59",
                "Range: 12|03|35 Average: 05|19|16 Median: 02|24|16",
            ],
        ];
    }
}