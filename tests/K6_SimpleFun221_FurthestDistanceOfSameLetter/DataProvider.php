<?php

namespace tests\K6_SimpleFun221_FurthestDistanceOfSameLetter;

class DataProvider
{
    public function data()
    {
        return [
            ["fffffahhhhhhaaahhhhbhhahhhhabxx", "a23", ],
            ["ucabcabcabcdfxhuizfgrsuixacbcx", "c28", ],
            ["iaufzhaifxhuzofghabcbacdbuzoxih", "i30", ],
            ["axaxfaaiiiofizxuiox", "x18", ],
            ["fxfaufhacaaacaaabbbabaddb", "a19", ],
            ["haaafhahhhuuuiuuuuiiifxxx", "f18", ],
            ["fxauf", "f5", ],
            ["awerabdfgb", "a5", ],
        ];
    }
}