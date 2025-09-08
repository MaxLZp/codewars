<?php

namespace tests\K6_HelpTheBookseller;

class DataProvider
{
    public function data()
    {
        return [
            [
                [
                    ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"], 
                    ["A", "B", "C", "D"]
                ], 
                "(A : 0) - (B : 1290) - (C : 515) - (D : 600)"
            ], [
                [
                    ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"],
                    ["A", "B"]
                ],
                "(A : 200) - (B : 1140)"
            ],
        ];
    }
}