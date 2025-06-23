<?php

namespace tests\K6_PlayingWithPassphrases;

class DataProvider
{
    public function data()
    {
        return [
            [["Y", 2], "A"],
            [["I LOVE YOU!!!", 1], "!!!vPz fWpM J"],
            [["I LOVE YOU!!!", 0], "!!!uOy eVoL I"],
            [["AAABBCCY", 1],"zDdCcBbB"],
            [["MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2], 
                "4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO"],
        ];
    }
}