<?php

namespace tests\K6_ReverseEveryOtherWordInTheString;

class DataProvider
{
    public function data()
    {
        return [
            ["Did it work?", "Did ti work?", ],
            ["I really hope it works this time...", "I yllaer hope ti works siht time...", ],
            ["Reverse this string, please!", "Reverse siht string, !esaelp", ],
            ["   ", "", ],
        ];
    }
}