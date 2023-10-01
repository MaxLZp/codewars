<?php

namespace tests\K6_ConscutiveStrings;

class DataProvider
{
    public function data()
    {
        return [
            [[["zone", "abigail", "theta", "form", "libe", "zas"], 2], "abigailtheta"],
            [[["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1], "oocccffuucccjjjkkkjyyyeehh"],
            [[[], 3], ""],
        ];
    }
}