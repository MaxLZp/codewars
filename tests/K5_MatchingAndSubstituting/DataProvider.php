<?php

namespace tests\K5_MatchingAndSubstituting;

class DataProvider
{
    public function data()
    {
        $s1="Program title: Primes\nAuthor: Kern\nCorporation: Gold\nPhone: +1-503-555-0091\nDate: Tues April 9, 2005\nVersion: 6.7\nLevel: Alpha";
        $s11="Program title: Hammer\nAuthor: Tolkien\nCorporation: IB\nPhone: +1-503-555-0090\nDate: Tues March 29, 2017\nVersion: 2.0\nLevel: Release";
        $s12="Program title: Primes\nAuthor: Kern\nCorporation: Gold\nPhone: +1-503-555-009\nDate: Tues April 9, 2005\nVersion: 6.7\nLevel: Alpha";

        return [
            [[$s1, "Ladder", "1.1"], "Program: Ladder Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: 1.1"],
            [[$s11, "Balance", "1.5.6"], "Program: Balance Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: 2.0"],
            [[$s12, "Ladder", "1.1"], "ERROR: VERSION or PHONE"],
        ];
    }
}