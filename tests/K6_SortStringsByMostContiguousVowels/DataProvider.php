<?php

namespace tests\K6_SortStringsByMostContiguousVowels;

class DataProvider
{
    public function data()
    {
        return [
            [["aa","eee","oo","iiii"], ["iiii","eee","aa","oo"]],
            [["a","e","ii","ooo","u"], ["ooo","ii","a","e","u"]],
            [["ioue","ee","uoiea"], ["uoiea", "ioue","ee"]],
            [["boot","high","day"], ["boot","high","day"]],
            [["how about now","a beautiful trio of"], ["a beautiful trio of","how about now"]],
            [["its a beautiful day", "yes, but a bit breezy"], ["its a beautiful day", "yes, but a bit breezy"]],

        ];
    }
}