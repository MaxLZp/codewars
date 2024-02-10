<?php

namespace tests\K7_NaughtyOrNice;

class DataProvider
{
    public function data()
    {
        return [
            [['broke someone\'s window', 'fought over a toaster', 'killed a bug'], "naughty", ],
            [["got someone a new car", "saved a man from drowning", "never got into a fight"], "nice", ],
            [["broke a vending machine", "never got into a fight", "tied someone's shoes"], "naughty", ],

        ];
    }
}
