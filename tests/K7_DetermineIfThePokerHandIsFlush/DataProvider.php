<?php

namespace tests\K7_DetermineIfThePokerHandIsFlush;

class DataProvider
{
    public function data(): array
    {
        return [
            [["AS", "3S", "9S", "KS", "4S"], true],
            [["AD", "4S", "7H", "KC", "5S"], false],
            [["10D", "4S", "7H", "KC", "5S"], false],
            [["10D", "QD", "7D", "KD", "5D"], true],
        ];
    }
}
