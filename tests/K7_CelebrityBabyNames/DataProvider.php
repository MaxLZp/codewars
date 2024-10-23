<?php

namespace tests\K7_CelebrityBabyNames;

class DataProvider
{
    public function data()
    {
        return [
            [["Cruz", "Zuma"], "Congratulations, your baby names are compatible!"],
            [["Buddy Bear","Romeo", "Olive"], "Congratulations, your baby names are compatible!"],
            [["Peaches", "Saint", "Theodora", "Ava", "Apple", "Egypt", "Tallulah", "Harlow", "Willow", "Weston", "Nala", "Atlas", "Silas", "Sundance", "Esmeralda", "Angel", "Lily-Rose", "Ever", "Rebel", "Lourdes"], "Congratulations, your baby names are compatible!"],
            [["Jaden"], "Congratulations, you can choose any name you like!"],
            [["George", "Charlotte"], "Back to the drawing board, your baby names are not compatible."],
        ];
    }
}
