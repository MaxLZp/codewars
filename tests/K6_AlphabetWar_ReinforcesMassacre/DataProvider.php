<?php

namespace tests\K6_AlphabetWar_ReinforcesMassacre;

class DataProvider
{
    public function data()
    {
        $reinforces = [
            "g964xxxxxxxx",
            "myjinxin2015",
            "steffenvogel",
            "smile67xxxxx",
            "giacomosorbi",
            "freywarxxxxx",
            "bkaesxxxxxxx",
            "vadimbxxxxxx",
            "zozofouchtra",
            "colbydauphxx"
        ];

        $airstrikes = [
            "* *** ** ***",
            " ** * * * **",
            " * *** * ***",
            " **  * * ** ",
            "* ** *   ***",
            "***   ",
            "**",
            "*",
            "*"
        ];

        return [
            // [[["abcdefg", "hijklmn"], ["   *   ", "*  *   "]],'hi___fg', ],
            // [[["aaaaa", "bbbbb", "ccccc", "ddddd"], ["*", " *", "   "]],'ccbaa', ],
            [[$reinforces, $airstrikes],'codewarsxxxx', ],
        ];
    }
}