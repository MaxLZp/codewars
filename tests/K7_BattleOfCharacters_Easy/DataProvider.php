<?php

namespace tests\K7_BattleOfCharacters_Easy;

class DataProvider
{
    public function data()
    {
        return [
            [["AAA", "Z"], "Z"],
            [["ONE", "TWO"], "TWO"],
            [["ONE", "NEO"], "Tie!"],
            [["FOUR", "FIVE"], "FOUR"],


            [["BTIX", "OBAIMO"], "Tie!"],
        ];
    }
}
