<?php

namespace tests\K6_MexicanWave;

class DataProvider
{

    public function data()
    {
        return [
            ["hello", ["Hello", "hEllo", "heLlo", "helLo", "hellO"], ],
            ["codewars", ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"], ],
            ["", [], ],
            ["two words", ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"], ],
            [" gap ", [" Gap ", " gAp ", " gaP "], ],
        ];
    }
}